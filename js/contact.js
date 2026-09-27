/* =========================================================
   문의하기 폼메일 (모든 페이지 공통)
   - 상단 "문의하기" 버튼을 누르면 문의 창이 뜹니다.
   - 문의 내용은 Web3Forms(무료 폼메일 서비스)를 통해
     wildlife-zone@naver.com 으로 전송됩니다.
   ▶ 설정: web3forms.com 에서 wildlife-zone@naver.com 으로 발급받은
     Access Key 를 아래 따옴표 안에 붙여 넣으세요.
     (키를 넣기 전에는 "보내기"를 누르면 메일 프로그램이 열립니다.)
   ========================================================= */
var WEB3FORMS_ACCESS_KEY = "";
var CONTACT_EMAIL = "wildlife-zone@naver.com";

(function () {
  var html =
    '<div class="modal" id="contactModal" aria-hidden="true">' +
    ' <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="contactTitle">' +
    '  <button type="button" class="modal-close" aria-label="닫기">&times;</button>' +
    '  <h2 id="contactTitle">제품 문의</h2>' +
    '  <p class="modal-desc">문의를 남겨 주시면 확인 후 연락드리겠습니다.</p>' +
    '  <form id="contactForm">' +
    '   <input type="checkbox" name="botcheck" class="hidden" tabindex="-1" autocomplete="off">' +
    '   <div class="row2">' +
    '    <label>이름 *<input type="text" name="이름" required></label>' +
    '    <label>연락처 *<input type="tel" name="연락처" required placeholder="010-0000-0000"></label>' +
    '   </div>' +
    '   <label>이메일<input type="email" name="email"></label>' +
    '   <div class="row2">' +
    '    <label>관심 제품<select name="관심제품">' +
    '     <option>T1 스마트 조류퇴치기</option>' +
    '     <option>레이저 + 태양광 모션센서 적/청 LED 야생동물퇴치기</option>' +
    '     <option>레이저 + 태양광 + 크레졸 (개발 중)</option>' +
    '     <option>T2 / T3 (출시 예정 제품)</option>' +
    '     <option>임대 · 기타 문의</option>' +
    '    </select></label>' +
    '    <label>설치 지역 / 장소<input type="text" name="설치장소" placeholder="예: 예천 사과 과수원"></label>' +
    '   </div>' +
    '   <label>문의 내용 *<textarea name="문의내용" rows="5" required></textarea></label>' +
    '   <label class="agree"><input type="checkbox" required> 문의 답변을 위한 개인정보(이름·연락처·이메일) 수집 및 이용에 동의합니다.</label>' +
    '   <button type="submit" class="btn">보내기</button>' +
    '   <p class="form-result" aria-live="polite"></p>' +
    '  </form>' +
    ' </div>' +
    '</div>';
  document.body.insertAdjacentHTML('beforeend', html);

  var modal = document.getElementById('contactModal');
  var form = document.getElementById('contactForm');
  var result = form.querySelector('.form-result');

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    form.querySelector('input[name="이름"]').focus();
  }
  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  }

  // 페이지 안의 모든 "문의하기" 링크(class="contact")에 연결
  var links = document.querySelectorAll('a.contact, a.open-contact');
  for (var i = 0; i < links.length; i++) links[i].addEventListener('click', openModal);

  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = {};
    var fd = new FormData(form);
    fd.forEach(function (v, k) { data[k] = v; });
    if (data.botcheck) return; // 스팸 로봇 차단

    // 키를 넣기 전: 메일 프로그램으로 대신 보내기
    if (!WEB3FORMS_ACCESS_KEY) {
      var body = '';
      for (var k in data) if (k !== 'botcheck') body += k + ': ' + data[k] + '\n';
      location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' +
        encodeURIComponent('[야퇴존 문의] ' + data['이름']) + '&body=' + encodeURIComponent(body);
      return;
    }

    data.access_key = WEB3FORMS_ACCESS_KEY;
    data.subject = '[야퇴존 홈페이지 문의] ' + data['관심제품'] + ' - ' + data['이름'];
    data.from_name = '야퇴존 홈페이지';
    var btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    result.textContent = '보내는 중입니다...';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data)
    })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.status === 200, j: j }; }); })
      .then(function (res) {
        if (res.ok) {
          result.textContent = '문의가 접수되었습니다. 감사합니다.';
          form.reset();
        } else {
          result.textContent = '전송에 실패했습니다. 전화(010-2410-4858)로 문의해 주세요.';
        }
      })
      .catch(function () {
        result.textContent = '전송에 실패했습니다. 전화(010-2410-4858)로 문의해 주세요.';
      })
      .then(function () { btn.disabled = false; });
  });
})();

야퇴존 웹사이트 (www.wildlife-zone.com) - 수정·업데이트 안내
==========================================================

[1] 폴더 구성
  index.html      Home
  tseries.html    T 시리즈 (T1, T2, T3)
  laser.html      레이저 (레이저+태양광, 레이저+태양광+크레졸)
  gallery.html    갤러리 (설치 사진·동영상)
  js/contact.js   문의하기 창(폼메일)
  css/style.css   모든 페이지 공통 디자인 (색상은 맨 위 :root 값만 바꾸면 전체 적용)
  images/         사진 (t1, t2, t3, laser, gallery, icons 폴더)
  videos/         동영상(mp4)과 첫 화면 이미지(jpg)

  * 프로그램 설치 없이 메모장으로 열어 수정할 수 있습니다.
  * index.html 을 더블클릭하면 인터넷 없이도 내 PC에서 미리 볼 수 있습니다.

[2] 갤러리에 사진 추가
  1) 사진 파일 이름을 영문·숫자로 바꿔 images/gallery 폴더에 넣습니다.
     예) t1-install-13.jpg   (가로·세로 1200px 정도로 줄이면 사이트가 빨라집니다)
  2) gallery.html 에서 아래 한 줄을 복사해 원하는 위치에 붙여 넣고,
     파일 이름(2곳)과 설명만 바꿉니다.

  <figure><a href="images/gallery/t1-install-13.jpg" target="_blank"><img src="images/gallery/t1-install-13.jpg" alt="설명" loading="lazy"></a><figcaption>설명</figcaption></figure>

[3] 갤러리에 동영상 추가
  1) mp4 파일을 videos 폴더에 넣습니다. 예) t1-orchard-02.mp4
     (첫 화면 이미지가 필요하면 같은 이름의 jpg 도 넣습니다. 없으면 poster 부분을 지우세요)
  2) gallery.html 에서 아래 한 줄을 복사해 붙여 넣고 파일 이름과 설명만 바꿉니다.

  <figure><video src="videos/t1-orchard-02.mp4" poster="videos/t1-orchard-02.jpg" controls preload="none" playsinline></video><figcaption>설명</figcaption></figure>

  * 새 제목(예: "레이저 설치 사례")을 만들려면 gallery.html 의
    <h2 class="gallery-title" ...> 부터 </div> 까지 한 묶음을 복사해 제목만 바꿉니다.

[4] 제품 추가 / T2·T3 출시 시 업데이트
  - tseries.html 에서 T2 부분은 <!-- ============ T2 ============ --> 로 시작합니다.
  - 출시되면 <span class="badge">출시 예정</span> 줄을 지우고,
    T1 부분의 <table class="spec"> ... </table> 표를 복사해 사양을 채우면 됩니다.
  - 신모델(예: T4)은 T3 <section> ... </section> 한 묶음을 복사해 id="t4" 로 바꾸고,
    맨 위 메뉴(tabs)와 index.html 제품군 목록에 한 줄씩 추가합니다.

[5] 회사 정보 / 메뉴 변경
  - 상단 메뉴(<header>)와 하단 회사 정보(<footer>)는 4개 페이지에 똑같이 들어 있습니다.
    바꿀 때는 4개 파일 모두 같은 내용으로 고쳐 주세요.

[6] 문의하기 폼메일 설정 (처음 한 번)
  - 상단 "문의하기"를 누르면 문의 창이 뜨고, 내용이 wildlife-zone@naver.com 으로 전송됩니다.
  - 전송은 Web3Forms(무료, 월 250건) 서비스를 사용합니다.
  1) web3forms.com 접속 → 이메일 칸에 wildlife-zone@naver.com 입력 → Access Key 받기
  2) 네이버 메일로 온 Access Key 를 복사
  3) js/contact.js 파일을 메모장으로 열어 var WEB3FORMS_ACCESS_KEY = ""; 의
     따옴표 안에 붙여 넣고 저장
  - 키를 넣기 전에는 "보내기"를 누르면 방문자 PC의 메일 프로그램이 열립니다.
  - 문의 창의 항목(관심 제품 목록 등)도 js/contact.js 에서 수정합니다.

[7] 게시(호스팅) 현황 : GitHub + Cloudflare Pages (무료)
  - 파일 창고 : github.com/goodmdb-cyber/wildlife-zone
  - 호스팅   : Cloudflare Pages 프로젝트 "wildlife-zone" (wildlife-zone.pages.dev)
  - 도메인   : wildlife-zone.com / www.wildlife-zone.com (닷네임 등록, 네임서버는 Cloudflare)
               gordon.ns.cloudflare.com / millie.ns.cloudflare.com

  수정·업데이트 방법
  1) github.com → wildlife-zone 창고로 이동
  2) 사진·동영상 : 해당 폴더로 들어가 Add file → Upload files → 끌어다 놓기 → Commit changes
     글 수정     : html 파일 클릭 → 연필(✏) 아이콘 → 수정 → Commit changes
  3) 1~2분 뒤 wildlife-zone.com 에 자동 반영 (Cloudflare 에서 할 일 없음)
  - 웹 화면으로 올릴 때 파일 1개당 25MB 이하, 한 번에 100개 이하


[추가] 레이저 + 태양광 + 크레졸 자료 (2026-10-19)
  - laser.html : "레이저 + 태양광 + 크레졸" 설명 아래 전시 제품 대표 사진 1장·동영상 1개
      사진 images/laser/hybrid-exhibit.jpg, 동영상 videos/hybrid-exhibit.mp4 (+ 같은 이름 .jpg 첫 화면)
  - gallery.html : Ctrl+F "hybrid-field" → 감천·청송 과수원 현장 시험 사진 6장·동영상 3개
      사진 images/laser/hybrid-field-01.jpg ~ 06.jpg
      동영상 videos/hybrid-gamcheon-1.mp4, hybrid-gamcheon-2.mp4, hybrid-cheongsong.mp4
  - 사진을 더 넣으려면 <figure> 한 줄을 복사해 파일 이름과 설명만 바꾸세요.

[추가] T 시리즈 페이지를 T1 상세 설명으로 개편 (2026-10-19)
  - tseries.html : T1 단독 상세 페이지 (T2·T3 소개 칸 삭제, 위쪽 분류에 "T2 (출원 완료)" 표시만 남김)
  - 그림(일러스트)은 사진 파일이 아니라 tseries.html 안에 그려져 있습니다(<svg> 부분).
  - 순서: 첫 화면 → 3중 방어 그림 → 사방으로 퍼지는 소리 → 레이저 → 사용법(적색 버튼) → 사양·특허·문의
  - 새 사진: images/t1/t1-product.jpg(본체), t1-award.jpg(우수특허대상),
            t1-control.jpg(조작함·적색 버튼), t1-move.jpg(옮겨 다시 세우기)
  - 이 페이지 전용 디자인은 css/style.css 맨 아래 "T1 상세 페이지" 부분에 있습니다.

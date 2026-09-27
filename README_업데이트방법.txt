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

[7] 추천 게시 방법 : GitHub + Vercel (무료)
  처음 한 번만 설정
  1) github.com 에서 새 저장소(Repository) 만들기 → 이 폴더 안의 파일 전체를 끌어다 놓고 Commit
     (웹 화면으로 올릴 때 파일 1개당 25MB 이하·한 번에 100개 이하, 현재 가장 큰 동영상은 약 15MB)
  2) vercel.com 에 GitHub 계정으로 로그인 → Add New Project → 방금 만든 저장소 Import → Deploy
     (Framework 는 "Other", 빌드 설정은 비워 둡니다)
  3) Vercel 프로젝트 → Settings → Domains 에서 wildlife-zone.com 과 www.wildlife-zone.com 추가
  4) 닷네임코리아 → 도메인 관리 → DNS(네임서버/레코드) 설정에서
     Vercel 화면에 표시되는 값을 그대로 입력
       - wildlife-zone.com      A 레코드     (일반값 76.76.21.21)
       - www.wildlife-zone.com  CNAME 레코드 (Vercel 화면에 표시된 값)
     몇 분~몇 시간 뒤 Vercel 에 "Valid Configuration" 이 뜨면 완료 (https 자동 적용)

  이후 업데이트
  - github.com 저장소 화면에서 파일을 끌어다 놓거나(사진·동영상),
    연필 아이콘으로 html 을 바로 수정한 뒤 Commit 하면 1~2분 안에 사이트에 자동 반영됩니다.

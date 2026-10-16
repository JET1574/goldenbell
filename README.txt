도전! 골든벨 700 — 설치형 웹앱(PWA) 파일
================================================

이 폴더를 통째로 웹 주소에 올리면 폰에서 "앱 설치"가 됩니다.
(폴더 안 파일 이름과 구조를 바꾸지 마세요.)

  index.html             앱 본체 (700문항 포함)
  manifest.webmanifest   앱 이름, 아이콘, 전체 화면 설정
  sw.js                  오프라인 캐시 (한 번 열면 인터넷 없이도 실행)
  icons/                 홈 화면 아이콘

GitHub Pages에 올리는 순서 (무료)
----------------------------------
1. https://github.com 에 로그인 → 오른쪽 위 + → New repository
   - Repository name: goldenbell   - Public 선택 → Create repository
2. 만들어진 저장소 화면에서 "uploading an existing file" 클릭
   - 이 폴더 안의 파일을 전부 끌어다 놓기 (icons 폴더째로)
   - 아래 "Commit changes" 클릭
3. 저장소 상단 Settings → 왼쪽 Pages
   - Branch: main, 폴더: / (root) 선택 → Save
4. 1~2분 뒤 같은 화면 위에 주소가 나옵니다.
   예) https://아이디.github.io/goldenbell/
5. 폰에서 그 주소를 열고
   - 안드로이드(Chrome): 화면 아래 "홈 화면에 앱으로 설치" 버튼 또는 메뉴 → 앱 설치
   - 아이폰(Safari): 공유 버튼 → 홈 화면에 추가

문제를 고친 뒤 다시 올리면 폰에서는 다음에 앱을 열 때 자동으로 새 버전이 적용됩니다.

파일을 그냥 폰에서 직접 열어도(인터넷 없이) 실행됩니다. 이 경우 설치 버튼은 뜨지 않습니다.

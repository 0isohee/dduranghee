/* ------------------------------------------------------------------
   뚜랑희 챌린지 — 설정 파일

   Firebase 콘솔에서 받은 값을 아래 따옴표 안에 그대로 붙여넣으세요.
   (콘솔 > 프로젝트 설정 > 내 앱 > SDK 설정 및 구성 > "구성" 선택)

   README.md에 화면 그림 없이도 따라할 수 있게 순서대로 적어뒀습니다.
------------------------------------------------------------------- */

window.FIREBASE_CONFIG = {
  apiKey: "여기에_apiKey_붙여넣기",
  authDomain: "여기에_authDomain_붙여넣기",
  projectId: "여기에_projectId_붙여넣기",
  storageBucket: "여기에_storageBucket_붙여넣기",
  messagingSenderId: "여기에_messagingSenderId_붙여넣기",
  appId: "여기에_appId_붙여넣기"
};

/* 앱 이름. 가족 방 이름과는 별개로, 브라우저 탭과 첫 화면에 보입니다. */
window.APP_NAME = "뚜랑희 챌린지";

/* Firebase SDK 버전. 문제가 생기면 이 숫자만 바꾸면 됩니다.
   비워두면 12.19.0 → 11.10.0 → 10.12.2 순서로 자동으로 시도합니다. */
window.FIREBASE_SDK_VERSION = "";

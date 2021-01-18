const HBTItestQuestions = [
  {
    id: 1,
    question: "헬스장에서 주로 자리 잡는 곳은?",
    answer1: { type: "E", answer: "거울 앞 사람많은 프리웨이트존" },
    answer2: { type: "I", answer: "마침 그때 자리가 빈 기구" },
    type: "E/I",
  },
  {
    id: 2,
    question:
      "워밍업이 막 끝난 당신, 수줍게 한 회원이 다가와 당신에게 운동 혹시 같이 할 수 있냐고 묻는다, 당신의 선택은?",
    answer1: { type: "E", answer: "(보조 개꿀~) 네 좋아요^^" },
    answer2: { type: "I", answer: "정중히 거절한다." },
    type: "E/I",
  },
  {
    id: 3,
    question: "운동을 하려는데, 헬스장이 문을 닫았다??! 당신의 운동 방법은?",
    answer1: { type: "E", answer: "야외 공원 기구로 운동한다." },
    answer2: { type: "I", answer: "혼자 홈트를 시도해본다." },
    type: "E/I",
  },
  {
    id: 4,
    question: "3개월 운동을 도와주신 PT 쌤의 생일이 되었다. 당신의 행동은",
    answer1: {
      type: "E",
      answer: "생일 축하한다는 톡과 함께 귀여운 이모티콘과 생일선물을 보낸다.",
    },
    answer2: {
      type: "I",
      answer: "모르는 척 한다.",
    },
    type: "E/I",
  },
  {
    id: 5,
    question: "선호하는 운동기록 방법은?",
    answer1: { type: "E", answer: "기록을 SNS에 공유한다." },
    answer2: { type: "I", answer: "메모장에 기록해서 나만 본다." },
    type: "E/I",
  },
  {
    id: 6,
    question: "즐겨보는 TV 프로그램에 몸짱 연예인이 나왔다. 당신이 지금 드는 생각은?",
    answer1: { type: "S", answer: "와...저 형은 3대 몇 칠까?" },
    answer2: { type: "N", answer: "와...나도 저 형처럼 되고 싶다!" },
    type: "S/N",
  },
  {
    id: 7,
    question:
      "기쁜 마음으로 2주만에 인바디를 쟀다. 그런데 뚜렷한 변화가 나타나지 않았다. 당신의 생각은?",
    answer1: {
      type: "S",
      answer: "이렇게는 안된다고 생각하며 바로 운동루틴을 수정한다.",
    },
    answer2: {
      type: "N",
      answer: "그럴수도 있지라고 생각하며 다시금 의지를 다진다.",
    },
    type: "S/N",
  },
  {
    id: 8,
    question: "운동은 재능 VS 노력",
    answer1: { type: "S", answer: "재능" },
    answer2: { type: "N", answer: "노력" },
    type: "S/N",
  },
  {
    id: 9,
    question:
      "드디어 코로나가 끝나고 헬스장을 갈 수 있게 되었다. 당신이 새로 개장한 헬스장을 볼 때 바로 보이는 것은 무엇인가?",
    answer1: { type: "S", answer: "기구" },
    answer2: { type: "N", answer: "전체적인 분위기" },
    type: "S/N",
  },
  {
    id: 10,
    question:
      "1달 뒤에 바디프로필을 무료로 찍을 기회가 생겼다. 단, 10KG를 변화시키는 조건으로. 당신의 선택은?",
    answer1: {
      type: "S",
      answer: "한달에 10KG 변화시키는 건 불가능하다. 정중하게 거절하자.",
    },
    answer2: {
      type: "N",
      answer: "10KG면 충분히 가능하지 않을까? 우선 못 먹어도 고!",
    },
    type: "S/N",
  },
  {
    id: 11,
    question: "음식을 선택하는 기준은?",
    answer1: { type: "T", answer: "영양성분" },
    answer2: { type: "F", answer: "맛" },
    type: "T/F",
  },
  {
    id: 12,
    question: "벤치프레스 고중량에 도전하다가 바벨을 가슴에 떨어뜨린 사람을 보며 드는 생각은?",
    answer1: { type: "T", answer: "아쉽다ㅠㅠ 거의 들었는데!" },
    answer2: { type: "F", answer: "아프겠다ㅠㅠ안다쳤나???" },
    type: "T/F",
  },
  {
    id: 13,
    question:
      "후련하게 마지막 세트를 끝내고 다음 운동을 하려는데, 당신의 이상형이 당신이 필요한 기구에서 운동을 하고 있다. 슬그머니 다가가서 당신이 할 말은?",
    answer1: { type: "T", answer: "몇 세트 남으셨나요?" },
    answer2: { type: "F", answer: "저기... 전화번호가 어떻게 되시나요...?" },
    type: "T/F",
  },
  {
    id: 14,
    question: "어제 오랜만에 하체운동을 해서 근육통이 심하다는 친구에게... 해줄 말은?",
    answer1: { type: "T", answer: "그럼 오늘은 상체하면 되겠다!" },
    answer2: { type: "F", answer: "괜찮아? 며칠 쉬었다가 다시 빡세게 달리자" },
    type: "T/F",
  },
  {
    id: 15,
    question: "남들이 보는 앞에서 먹던 닭가슴살이 떨어졌다. 당신의 선택은?",
    answer1: { type: "T", answer: "3초 룰. 먹는다." },
    answer2: { type: "F", answer: "남들의 시선.. 먹지 않는다." },
    type: "T/F",
  },
  {
    id: 16,
    question:
      "오늘 밤 신성한 하체운동이 계획되어 있다. 그런데 갑자기 친구들이 밤에 한잔 하자고 연락이 왔다. 오늘 밤 당신의 선택은?",
    answer1: { type: "J", answer: "바벨을 든다." },
    answer2: { type: "P", answer: "술잔을 든다." },
    type: "J/P",
  },
  {
    id: 17,
    question: "오늘 헬스장이 갑자기 문을 닫아 운동을 하지 못하게 되었다. 당신의 마음 상태는?",
    answer1: {
      type: "J",
      answer: "애써 세운 운동 계획이 무너질까봐 걱정한다.",
    },
    answer2: { type: "P", answer: "어쩔 수 없지 뭐. 내일 운동하면 되지!" },
    type: "J/P",
  },
  {
    id: 18,
    question: "당신이 운동 루틴을 설정하는 방법은?",
    answer1: { type: "J", answer: "계획한 분할법을 죽어도 고수한다." },
    answer2: { type: "P", answer: "상황에 맞게 융통성있게 수정한다." },
    type: "J/P",
  },
  {
    id: 19,
    question: "단백질은 언제 먹어야 하는가?",
    answer1: {
      type: "J",
      answer: "기회의 창을 놓칠 순 없다. 운동 후 30분 탄수화물과 함께 섭취.",
    },
    answer2: {
      type: "P",
      answer: "하루 중 아무 때나 권장량만 채우면 타이밍은 상관없다.",
    },
    type: "J/P",
  },
  {
    id: 20,
    question: "여행계획을 세울 때 당신의 모습은?",
    answer1: {
      type: "J",
      answer: "여행일정에 운동을 포함시키고, 근처에 헬스장이 있는 숙소로 알아본다.",
    },
    answer2: {
      type: "P",
      answer: "며칠 쉬며 여행을 즐기고, 여행을 다녀온 뒤 새로운 마음으로 다시 운동한다.",
    },
    type: "J/P",
  },
];

export { HBTItestQuestions };

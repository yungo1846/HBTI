const HelchangTestQuestions = [
  {
    id: 1,
    type: "radio",
    answer1: {
      score: "stay",
      select: "탄수화물 99% 단백질 1% 성분의 미슐랭 2스타 디저트 평생 먹기",
    },
    answer2: {
      score: "plus",
      select: "탄수화물 1% 단백질 99% 성분의 설국열차 양갱 평생 먹기",
    },
  },
  {
    id: 2,
    type: "radio",
    answer1: { score: "plus", select: "치킨 닭가슴살" },
    answer2: { score: "stay", select: "치킨 닭다리" },
  },
  {
    id: 3,
    type: "radio",
    answer1: { score: "stay", select: "운동 없이 호캉스 7일" },
    answer2: { score: "plus", select: "헬스장 전세 헬캉스 7일" },
  },
  {
    id: 4, // whatever user choose questions, both of two questions give +25 point.
    type: "radio",
    answer1: { score: "plus", select: "100kg 1번" },
    answer2: { score: "plus", select: "1kg 100번" },
  },
  {
    id: 5,
    type: "radio",
    answer1: { score: "plus", select: "통장 100만원 빠지기" },
    answer2: { score: "stay", select: "근육 1kg 빠지기" },
  },
  {
    id: 6,
    type: "radio",
    answer1: { score: "stay", select: "클럽" },
    answer2: { score: "plus", select: "헬스클럽" },
  },
  {
    id: 7, // whatever user choose questions, both of two questions give +25 point
    type: "radio",
    answer1: { score: "plus", select: "건강하기 위해 운동함" },
    answer2: { score: "plus", select: "운동하기 위해 건강함" },
  },
  {
    id: 8,
    type: "radio",
    answer1: { score: "plus", select: "복근" },
    answer2: { score: "stay", select: "모근" },
  },
  {
    id: 9,
    type: "radio",
    answer1: {
      score: "stay",
      select: "초절정 스위스 여신과 가슴이 두근거리는 데이트",
    },
    answer2: {
      score: "plus",
      select: "초절정 스미스 머신과 가슴 이두근 고립웨이트",
    },
  },
  {
    id: 10,
    type: "radio",
    answer1: { score: "plus", select: "조상님이 봉 무게 들어주기" },
    answer2: { score: "stay", select: "조상님이 로또번호 알려주기" },
  },
  {
    id: 11,
    type: "O/X",
    question: "크리스마스 이브에 혼자 운동한 적 있다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 12,
    type: "O/X",
    question: "하루에 먹는 단백질의 양을 계산한다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 13,
    type: "O/X",
    question: "운동에 투자한 돈이 200만원이 넘는다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 14,
    type: "O/X",
    question: "새벽 4시에 운동 해본 경험이 있다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 15,
    type: "O/X",
    question: "SNS에 몸 사진을 올려본적이 있다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 16,
    type: "O/X",
    question: "바디프로필을 찍어본 적이 있다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 17,
    type: "O/X",
    question: "이성을 볼 때, 운동이 취미가 아니여도 괜찮다.",
    answer1: { score: "stay", select: "O" },
    answer2: { score: "plus", select: "X" },
  },
  {
    id: 18,
    type: "O/X",
    question: "여행 갈 때 근손실을 걱정한다.",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: 19,
    type: "O/X",
    question: "3대 500을 친다. (여성은 3대 300)",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
  {
    id: "20",
    type: "O/X",
    question: "보충제를 5종류 이상 먹어봤다",
    answer1: { score: "plus", select: "O" },
    answer2: { score: "stay", select: "X" },
  },
];

export default HelchangTestQuestions;

const MY_INFO_OPTIONS = {
  gender: ['남자', '여자'],
  occupation: [
    '개발',
    '경영-비즈니스',
    '마케팅-광고',
    '디자인',
    '영업',
    '고객서비스-리테일',
    '미디어',
    '인사',
    '게임 제작',
    '금융',
    '엔지니어링-설계',
    '물류-무역',
    '제조-생산',
    '의료-제작-바이오',
    '법률-법집행기관',
    '식-음료',
    '교육',
    '건설-시설',
    '공공-복지',
  ],
  age: [
    '20대',
    '30대',
    '40대',
    '50대'
  ],
  birthYear: [...Array(40).keys()].map(x => String(x + 1970)),
  paymentInfo: [
    {
      name: '프로미스 10개',
      price: 100
    },
    {
      name: '프로미스 50개',
      price: 400
    }
    ,
    {
      name: '프로미스 100개',
      price: 700
    }
  ]
};

export default MY_INFO_OPTIONS;

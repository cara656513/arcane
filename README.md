# 과제명

- [React 7기] CH 5 주특기 플러스주차 과제-Riot API를 활용한 리그 오브 레전드 정보 앱 만들기

## 과제 소개

- Riot API를 활용한 리그 오브 레전드 정보 앱 만들기
- NextJS와 TypeScript를 사용
- 타입 선언 방법, useState에서 제네릭 사용, 유틸리티 타입 활용
- 동적 라우팅, App Router, 레이아웃 구성, Route Handler

## 필수 기능

1. 프로젝트 셋업 및 기본 구조 구성
2. 데이터 Fetching
3. Tanstack Query
4. 각 페이지 구현 및 렌더링 방식 적용
5. 레이아웃 및 네비게이션 구성
6. 최종 점검 및 배포

## 기술스택

<div>
<img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=Next.js&logoColor=white"/>
<img src="https://img.shields.io/badge/Typescript-3178C6?style=flat-square&logo=Typescript&logoColor=white"/>
<img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
</div>

## ⏲️ 개발기간

- 2024.12.11(수) ~ 2024.12.18(수)

## 주요 기능
1. 전체 페이지에 적용되는 헤더 및 푸터, 홈 화면에 각 메뉴 추가하였습니다.
![image](https://github.com/user-attachments/assets/c232bbc4-01e4-4e9b-b5e2-cd1e45c4e67c)

2. 전체 챔피언 리스트 구현하였습니다.
![image](https://github.com/user-attachments/assets/286a44b1-2d7d-4acc-89c8-14e81cf1151d)

3. 챔피언 디테일 창에서 각 챔피언마다 메타데이터가 달라지도록 설정하고, 스탯을 시각적 요소로 보여주었습니다.
![image](https://github.com/user-attachments/assets/c1a95864-e5e8-47c2-8a91-1c8fe6ce03d7)

4. 아이템 리스트 및 디테일 창 구현하였습니다.
![image](https://github.com/user-attachments/assets/c32d3f2a-dc75-4e11-b4ce-62f2d8cbd789)

5. 로테이션 챔피언 리스트 및 디테일 창을 라우트 핸들러 및 클라이언트 사이드로 구현하였고, 메타데이터 설정을 위해 컴포넌트 분리하였습니다.
![image](https://github.com/user-attachments/assets/0819d6c1-2c9b-43fd-a655-9b8a1499d001)


## trouble shooting
Min's Arcane - 내일배움캠프 과제 트러블 슈팅(https://velog.io/@kang1129/Mins-Arcane-%EB%82%B4%EC%9D%BC%EB%B0%B0%EC%9B%80%EC%BA%A0%ED%94%84-%EA%B3%BC%EC%A0%9C-%ED%8A%B8%EB%9F%AC%EB%B8%94-%EC%8A%88%ED%8C%85)

## 프로젝트 파일 구조

```
📦arcane
 ┣ 📂.next
 ┣ 📂node_modules
 ┣ 📂public
 ┃ ┣ 📜champline.png
 ┃ ┣ 📜logo.png
 ┃ ┣ 📜next.svg
 ┃ ┗ 📜vercel.svg
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂api
 ┃ ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┃ ┣ 📂champions
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂items
 ┃ ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📂rotation
 ┃ ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┃ ┗ 📜rotation.tsx
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┣ 📜globals.css
 ┃ ┃ ┣ 📜layout.tsx
 ┃ ┃ ┣ 📜page.tsx
 ┃ ┃ ┗ 📜providers.tsx
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜ChampList.tsx
 ┃ ┃ ┗ 📜Stat.tsx
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜Champion.ts
 ┃ ┃ ┣ 📜ChampionDetail.ts
 ┃ ┃ ┣ 📜ChampionRotation.ts
 ┃ ┃ ┗ 📜Item.ts
 ┃ ┗ 📂utils
 ┃ ┃ ┗ 📜serverApi.ts
 ┣ 📜.env.local
 ┣ 📜.gitignore
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.mjs
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜postcss.config.mjs
 ┣ 📜README.md
 ┣ 📜tailwind.config.ts
 ┗ 📜tsconfig.json
```

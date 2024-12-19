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

## 코드

## trouble shooting

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

- strapi에서 qs를 사용할때 참고하기
  https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/populating-fields.html#relation-media-fields

- 서치바를 누르면 페이지 이동이 일어나는 문제 해결 필요.
- 필터를 다양화할 때 쿼리를 어떻게 적용시켜야하는지

- 모달 생성 프로세스 정리
  next.js는 서버에서 렌더링 될 때, windows.document를 만질 수 있는 권한이 없음
  document.js 를 통해서 modal이라는 div를 설정해야함
  모달이 사용되는 페이지에서 useState로 브라우저가 window.document를 설정할 수 있는 상태를 useEffect로 감지함
  서버에서 렌더링 된 후에 browser 기능이 활성화되면 dom을 사용할 수 있도록 세팅한다.

- 에러체크

```jsx
const res = await fetch(
  // `${API_URL}/api/events?filters[id]id=${evt.id}&populate=*`
  `${API_URL}/api/events/${event.id}?populate=*`
);
const { data } = await res.json();
console.log(`Logger :`, data);
// if (data.attributes.image.data != null) {
setImagePreview(data.attributes.image.data.attributes.formats.medium.url);
// }
```

`{data}` 로 받아오기 - 아니면 data.data.attributes... 형태로 받아와야함.

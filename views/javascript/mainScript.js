function showData() {
  fetch('http://localhost:8080/register').then((response) => {
    console.log(response.err);
  });
}

showData();

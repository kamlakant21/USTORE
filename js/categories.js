class categories {
  constructor() {
    this.apiUrl = "https://fakestoreapi.com/";
  }
  getAllCategories() {
    $.ajax({
      type: "GET",
      url: this.apiUrl + "products/categories",
      success: (data) => {
        console.log(data);
      },
    });
  }
}

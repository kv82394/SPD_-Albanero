//We can also assign a method to the class function itself, not to its "prototype"
//static is a class method not object method
class Article {
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static compare(articleA, articleB) {
      return articleA.date - articleB.date;
    }
  }
  
  // usage
  let articles = [
    new Article("HTML", new Date(2019, 1, 1)),
    new Article("CSS", new Date(2019, 0, 1)),
    new Article("JavaScript", new Date(2019, 11, 1))
  ];
  
  articles.sort(Article.compare);
  
  console.log( articles[0].title )
  class Article1{
    constructor(title, date) {
      this.title = title;
      this.date = date;
    }
  
    static createTodays() {
      // remember, this = Article
      return new this("Today's digest", new Date());
    }
  }
  
  let article01= Article1.createTodays();
  
  console.log( article01.title );
  class boom {
    static publisher = "Ilya Kantor";
  }
  
  console.log( boom.publisher );//since its class method can be called by class name
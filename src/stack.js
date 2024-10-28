class MyStack{
    constructor(){
        this.stack = [];
    }
    create(review){
        this.stack.push(review);
        console.log(`You have added a new review: ${review}`);
    }
    read(){
       if(this.stack.length !== 0){
        console.log("Reviews : ");
        this.stack.forEach((newReview,index)=> {
            console.log(`${index + 1}: ${newReview}`);
        });
       } else {
        console.log("No Reviews Available");
       }
    }
    update(id){
        if(this.stack.length !== 0){
            const index = this.stack.findIndex((review) => review.id === id);
            this.stack[index] = updatedReview;
            console.log(`Review updated : ${updatedReview}`);

        } else {
            console.log("No Reviews Available");
           }
    }
    delete(id){
if(this.stack.length !== 0){
    const index = this.stack.findIndex((review) => review.id === id);
    this.stack.splice(id, 1);
console.log("Deleted!")
   
} else {
    console.log("No Reviews Available");
   }
    }
}

export default MyStack;
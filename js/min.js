function z(){
      var x=[{author:'Albert Einstein',quote:"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
   },
   {author:'Elbert Hubbard',quote:"It's not what happens to you, but how you react to it that matters."
   },
   {author:'Oscar Wilde',quote:"Be yourself; everyone else is already taken."},
   {author:'Marilyn Monroe',quote:'\'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.'},{author:'Mahatma Gandhi',quote:'Be the change that you wish to see in the world.'},
   {author:'Robert Frost',quote:'In three words I can sum up everything I\'ve learned about life: it goes on.'},
   {author:'Mark Twain',quote:'If you tell the truth, you don\'t have to remember anything.'},
   {author:'Elbert Hubbard',quote:'A friend is someone who knows all about you and still loves you.'},
   {author:'Oscar Wilde',quote:'I am so clever that sometimes I don\'t understand a single word of what I am saying.'},
   {author:'Andre Gide',quote:'It is better to be hated for what you are than to be loved for what you are not.'}]

   var floor =Math.floor(Math.random()*10)

   document.getElementById('authors').innerHTML='-- ' + x[floor].author
   
   document.getElementById('q').innerHTML='" '+ x[floor].quote + ' "'
}










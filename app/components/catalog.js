var React = require("react");
var ReactRouter = require("react-router");
var History = ReactRouter.History;
var Link = ReactRouter.Link;
var Book = require("./book.js")


 var options = {
        bookList: [{
            key: 1,
            bookCourse: 'ECEn425',
            bookTitle: 'Primer to Embedded Software',
            bookPrice: '$100',
            bookSeller: 'Brian Watson',
            bookSellerEmail: 'brianlwatson@gmail.com'
        },

        {
            key: 2,
            bookCourse: 'CS360',
            bookTitle: 'Yeah right',
            bookPrice: '$999',
            bookSeller: 'RODOLFO',
            bookSellerEmail: 'RODOLFODROPS@GMAIL.com'
        }


        ]



    };


var Catalog = React.createClass({

   


    render: function() {

         var list = options.bookList.map(function(bookProps)
            {
                return <Book {...bookProps}/>
            });
        return (
           
            <div className='content'>
             <h2> TextBook Catalog: </h2>
                <br/>
                {list}
            </div>

            );
    }

});

module.exports = Catalog;

import  { useState, useEffect } from 'react';

import { Row, Col } from 'antd';
import styled from 'styled-components';
interface Book {
  title: string;
  author: string;
  publishedYear: number;
  page_count?: number;
  price?: string;
  summary: string;

}

interface BookCardProps {
  book: Book;
}
interface BookListProps {
  searchTerm: string;
}
function BookCard({ book }: BookCardProps) {
    return (
      <Col  sm={24} md={12} lg={8} xl={8}>
         <Card>
           <h2>{book.title}</h2>
           <p>{book.summary ? book.summary.split(/\s+/).slice(0, 50).join(' ') :"     Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet,    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, accusantium quod vitae voluptate cum corrupti beatae deleniti quam nobis nisi!"}</p>
           <h3>{book.author}   {book.publishedYear}</h3>
            {/* <span>{book.page_count} pages</span> */}
          </Card> 
      </Col>
    );
  }
  

  function BookList({ searchTerm }: BookListProps) {
    console.log(searchTerm);
    
    const [books, setBooks] = useState<Book[]>([]);
  
    useEffect(() => {
      const fetchData = () => {
        try {
          const storedData = localStorage.getItem('myData');
         
          if (storedData) {
            const data = JSON.parse(storedData);
            setBooks(data);
            console.log(data);
            
          } else {
            console.error('Data not found in localStorage');
          }
        } catch (error) {
          console.error(error);
        }
      };
                 
  
      fetchData();
    }, []); // Remove the delay logic if not needed

    const filteredBooks = searchTerm
      ? books.filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : books;
  
    return (
      <Row>
        {filteredBooks && filteredBooks.length > 0 ? (
          filteredBooks.map((book, index) => (
            <BookCard key={index} book={book} />
          ))
        ) : (
          <p>No books available</p>
        )}
      </Row>
    );
  }
  
  
const Card = styled.div`
    max-width: 390.33px;
    min-height: 209px;
    padding: 32px;
    border-radius: 12px;
    border: 1px;
    gap: 16px;
    background: #d6a5a5;
    margin:30px;
    font-family: Montserrat;

    h2 {
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        letter-spacing: 0px;
        text-align: left;
    }
    p {
        font-family: Mulish;
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        letter-spacing: 0px;
        text-align: left;
        margin:20px 0;
    }
    h3 {
        display: inline-block;
        font-size: 15px;
        font-weight: 400;
        line-height: 21px;
    }
    span {
        display: inline-block;
        margin-left: 10px;
        padding:3px 7px;
        border-radius:9px;
        background: green;
        margin-right:auto;
    }
`

export default BookList;



  // Store data in localStorage
  const data = [
    {
      title: "The Brightest Night",
      author: "Tui Sutherland",
      publishedYear: 2014,
      summary: "The dragonets struggle to fulfill the prophecy and -- somehow -- end the war in this thrilling new installment of the New York Times bestselling Wings of Fire series!One will have the power of wings of fire . . . Sunny has always taken the Dragonet Prophecy very seriously. If      "
    },
    {
      title: "The Lost Heir",
      author: "Tui Sutherland",
      publishedYear: 2013,
      summary: "The WINGS OF FIRE saga continues with a thrilling underwater adventure -- and a mystery that will change everything! The lost heir to the SeaWing throne is going home at last... She can't believe it's finally happening. Tsunami and her fellow dragonets of destiny are journeying under the water to"
    },
    {
      title: "The Dark Secret",
      author: "Tui Sutherland",
      publishedYear: 2013,
      summary: "The New York Times bestselling WINGS OF FIRE saga soars to the mysterious land of the NightWings, where Starflight must face a terrible choice---his home, or his friends?In the shadows, trouble is brewing. . .The mysterious NightWings keep everything hidden, from their home and their queen to their allegiance in"
    },
    {
      title: "The Hidden Kingdom",
      author: "Tui Sutherland",
      publishedYear: 2013,
      summary:  "The WINGS OF FIRE saga continues!Deep in the rain forest, danger awaits...Glory knows the dragon world is wrong about her tribe. After all, she isn't as lazy as a RainWing -- she isn't lazy at all! Maybe she wasn't meant to be one of the dragonets of destiny, as the"
    },
    {
      title: "Darkness of Dragons",
      author: "Tui Sutherland",
      publishedYear: 2013,
      summary: "An ancient evil, a terrible prophecy -- and five dragonets who could save the world . . . Don't miss the most thrilling adventure yet in the New York Times bestselling Wings of Fire series! Qibli knows Darkstalker must be stopped. And he knows he could stop him -- if"
    },
    {
      title: "Winglets Quartet",
      author: "Tui Sutherland",
      publishedYear: 2017,
      summary: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, accusantium quod vitae voluptate cum corrupti beatae deleniti quam nobis nisi!',
    },
    {
      title: "Talons of Power",
      author: "Tui Sutherland",
      publishedYear: 2020,
      summary: 'The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!For every villain, there is a hero . . . Turtle isnt one of the heroes he reads about in stories. If he were,',
    },
    {
      title: "The Poison Jungle",
      author: "Tui Sutherland",
      publishedYear: 2017,
      summary: 'The New York Times bestselling series continues with a thrilling revelation -- brand-new tribes of dragons! Some secrets are deadly. Its no secret that Sundew wants to destroy the HiveWings. Its her lifes mission to exact revenge on the tribe that tried to wipe out the LeafWings and ripped every'
    },
    {
      title: "The Hive Queen",
      author: "Tui Sutherland",
      publishedYear: 2019,
      summary:'The #1 New York Times bestselling series continues with a thrilling revelation -- three brand-new tribes of dragons!Growing up in the hives, Cricket has always had a million questions. Why are trees forbidden, even in art? Why do her parents seem to hate her? And the biggest, most dangerous and'
    },
    {
      title: "The Dragonet Prophecy",
      author: "Tui Sutherland",
      publishedYear: 2018,
      summary:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate natus laboriosam, eveniet, accusantium quod vitae voluptate cum corrupti beatae deleniti quam nobis nisi!'
    },
    {
      title: "A Winglets Collection",
      author: "Tui Sutherland",
      publishedYear: 2013,
      summary:  'Collection of three Wings of Fire Short Stories : 1. Prisoners 2. Assassin 3. Deserter'
    },
    {
      title: "Darkstalker",
      author: "Tui Sutherland",
      publishedYear: 2016,
      summary: 'The first-ever special edition of the New York Times bestselling Wings of Fire series soars back in time to the origin of Pyrrhias most dangerous dragon: Darkstalker. Three dragons. One unavoidable, unpredictable destiny. This is the beginning... of the end. In the SeaWing kingdom, a young prince learns he is'
    },
    {
      title: "Dragonslayer",
      author: "Tui Sutherland",
      publishedYear: 2016,
      summary:'This special edition of the #1 New York Times bestselling Wings of Fire series soars back in time to give readers a glimpse of Pyrrhia through new eyes. For decades dragons have wondered how three small scavengers managed to kill Queen Oasis. Until now. Travel back to before the War'
    },
    {
      title: "The Flames of Hope",
      author: "Tui Sutherland",
      publishedYear: 2020,
      summary: 'New York Times bestselling series is hotter than ever, and this thrilling conclusion to the Lost Continent Prophecy arc is a has always wanted to change the world -- to fix it, to free it -- even if she'
    },
    {
      title: "The Dangerous Gift",
      author: "Tui Sutherland",
      publishedYear: 2022,
      summary: 'New York Times bestselling series continues! A wall cant protect them anymore Snowfall didnt expect to be queen of the IceWings at such a young age, but now that she is, shes going to be the best queen ever. All she has to do is'
    },
    {
      title: "Winter Turning",
      author: "Tui Sutherland",
      publishedYear: 2021,
      summary:  'The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!Daring mission... or deadly mistake?Winter has been a disappointment to his royal IceWing family his whole life. When his sister, Icicle, runs away from',
    },
    {
      title: "The Lost Continent",
      author: "Tui Sutherland",
      publishedYear: 2015,
      summary:"The #1 New York Times bestselling series continues with a thrilling revelation -- brand-new tribes of dragons!Blue the SilkWing is content. Life in his Hive is safe; he loves his family; he has enough to eat. And Pantala has been at peace for as long as he can remember --"
    },
    {
      title: "Moon Rising",
      author: "Tui Sutherland",
      publishedYear: 2018,
      summary: "The New York Times-bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!Peace has come to Pyrrhia . . . for now.The war between the tribes is finally over, and now the dragonets of the prophecy have a plan for",
    },
    {
      title: "Escaping Peril",
      author: "Tui Sutherland",
      publishedYear: 2015,
      summary:  'The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!Peril has been loyal to Queen Scarlet, who used her fatal firescales to kill countless dragons in the SkyWing arena. Now, Peril is loyal'
    },
    {
      title: "Wings Of Fire",
      author: "Tui Sutherland",
      publishedYear: 2016,
      summary: 'A thrilling new series soars above the competition and redefines middle-grade fantasy fiction for a new generation! The seven dragon tribes have been at war for generations, locked in an endless battle over an ancient, lost treasure. A secret movement called the Talons of Peace is determined to bring an',
    },
    {
      title: "Phoebe the Moonlight Dragon",
      author: "Mara",
      publishedYear: 2022,
      summary: "A super collectible series that celebrates the inner fire of everyday girls!The Night Dragons are united in friendship and in a shared mission: They must save the Magic Forest from the evil Fire Sparks. They are out to ruin the delicate balance that exists between night and day--and only the"
    }]
  localStorage.setItem('myData', JSON.stringify(data));
  
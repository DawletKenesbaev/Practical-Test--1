import  { useState, useEffect } from 'react';


import { Row, Col } from 'antd';

import styled from 'styled-components';
interface Book {
  title: string;
  author_last_names: string;
  copyright: number;
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
           <h3>{book.author_last_names}   {book.copyright}</h3>
           <span>{book.page_count} pages</span>
          </Card> 
      </Col>
    );
  }
  

  function BookList({ searchTerm }: BookListProps) {
    const [books, setBooks] = useState<Book[]>([]);
  
    useEffect(() => {
      const fetchData = () => {
        try {
          // Check if data is present in localStorage
          const storedData = localStorage.getItem('myLocalData');
      
          if (storedData) {
            const data = JSON.parse(storedData);
            setBooks(data.results);
            console.log(data.results);
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
  const data = {
    "total_results": 52,
    "total_pages": 3,
    "results": [
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "odd",
          "smolder",
          "alternate",
          "convenient",
          "compact",
          "former",
          "addax",
          "expose",
          "peril"
        ],
        "page_count": 308,
        "title_search": "Brightest Night",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 10,
        "canonical_published_work_id": 302710,
        "copyright": 2014,
        "title": "The Brightest Night",
        "measurements": {
          "english": {
            "mlf": 3.47601135339001,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 11.3765561843169,
            "lexile": 790,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781484778715",
          "9781496565549",
          "9780525646686"
        ],
        "published_works": [
          {
            "isbn": "9780545349222",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 302710,
            "page_count": 308,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349222.jpeg"
          },
          {
            "isbn": "9780545634038",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 828536,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545634038.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The dragonets struggle to fulfill the prophecy and -- somehow -- end the war in this thrilling new installment of the New York Times bestselling Wings of Fire series!One will have the power of wings of fire . . . Sunny has always taken the Dragonet Prophecy very seriously. If Pyrrhia's dragons need her, Clay, Tsunami, Glory, and Starflight to end the war, she's ready to try. She even has some good ideas how to do it, if anyone would listen to her.But shattering news from Morrowseer has shaken Sunny's faith in their destiny. Is it possible for anyone to end this terrible war and choose a new SandWing queen? What if everything they've been through was for nothing? Buried secrets, deadly surprises, and an unexpected side to scavengers are all waiting for her in the shifting sands of the desert, where Sunny must decide once and for all: Is her destiny already written?Or can five dragonets change their fate and save the world . . . the way they choose?",
        "work_id": 315588,
        "canonical_isbn": "9780545349222"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "contingency",
          "odd",
          "convenient",
          "bolt",
          "dispose",
          "spiral",
          "gag",
          "raw",
          "register"
        ],
        "page_count": 336,
        "title_search": "Lost Heir",
        "author_first_names": [
          "Tui"
        ],
        "max_age": 13,
        "canonical_published_work_id": 173298,
        "copyright": 2013,
        "title": "The Lost Heir",
        "measurements": {
          "english": {
            "mlf": 3.42046454181388,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.4588138385502,
            "lexile": 750,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781496583482",
          "9781496565556",
          "9781496565549"
        ],
        "published_works": [
          {
            "isbn": "9780545541251",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 173298,
            "page_count": 336,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349192.jpeg"
          },
          {
            "isbn": "9780545349192",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 180678,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349192.jpeg"
          },
          {
            "isbn": "9780545470100",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 857233,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545470100.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The WINGS OF FIRE saga continues with a thrilling underwater adventure -- and a mystery that will change everything!  The lost heir to the SeaWing throne is going home at last...  She can't believe it's finally happening. Tsunami and her fellow dragonets of destiny are journeying under the water to the great SeaWing Kingdom. Stolen as an egg from the royal hatchery, Tsunami is eager to meet her future subjects and reunite with her mother, Queen Coral.  But Tsunami's triumphant return doesn't go quite the way she'd imagined. Queen Coral welcomes her with open wings, but a mysterious assassin has been killing off the queen's heirs for years, and Tsunami may be the next target. The dragonets came to the SeaWings for protection, but this ocean hides secrets, betrayal--and perhaps even death. ",
        "work_id": 171034,
        "canonical_isbn": "9780545541251"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "reconvene",
          "alternate",
          "odd",
          "intense",
          "hollow",
          "bolt",
          "register",
          "raw",
          "dispute",
          "cure"
        ],
        "page_count": 295,
        "title_search": "Dark Secret",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 13,
        "canonical_published_work_id": 270926,
        "copyright": 2013,
        "title": "The Dark Secret",
        "measurements": {
          "english": {
            "mlf": 3.49228794631331,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 11.1674735520889,
            "lexile": 770,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781496583482",
          "9781496565549",
          "9780525646686"
        ],
        "published_works": [
          {
            "isbn": "9780545349215",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 270926,
            "page_count": 295,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349215.jpeg"
          },
          {
            "isbn": "9780545578042",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 855192,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545578042.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 11,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The New York Times bestselling WINGS OF FIRE saga soars to the mysterious land of the NightWings, where Starflight must face a terrible choice---his home, or his friends?In the shadows, trouble is brewing. . .The mysterious NightWings keep everything hidden, from their home and their queen to their allegiance in the war. Now they've kidnapped their own dragonet of destiny, and Starflight is finally meeting the rest of his tribe -- whether he wants to or not.The NightWings have also kidnapped several innocent RainWings, now trapped in the dark, barren, miserable place that is the NightWing kingdom. Starflight wants to help the RainWings, but he's busy saving his own scales and trying to find a way back to his friends. The fate of two kingdoms rests in his talons, and with no one to save him, Starflight will have to find a way to be brave . . . before it's too late.",
        "work_id": 277265,
        "canonical_isbn": "9780545349215"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "contagious",
          "tense",
          "odd",
          "gag",
          "trace",
          "generous",
          "alternate",
          "minor",
          "resolve",
          "bolt"
        ],
        "page_count": 296,
        "title_search": "Hidden Kingdom",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 10,
        "canonical_published_work_id": 215703,
        "copyright": 2013,
        "title": "The Hidden Kingdom",
        "measurements": {
          "english": {
            "mlf": 3.4654066229496,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.4248447204969,
            "lexile": 730,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781496583482",
          "9781496565556",
          "9781496565549"
        ],
        "published_works": [
          {
            "isbn": "9780545349208",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 215703,
            "page_count": 296,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349208.jpeg"
          },
          {
            "isbn": "9780545349253",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 266901,
            "page_count": 336,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349253.jpeg"
          },
          {
            "isbn": "9780606354233",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 501634,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780606354233.jpeg"
          },
          {
            "isbn": "9780545540285",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 783001,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545540285.jpeg"
          },
          {
            "isbn": "9781338344066",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 841205,
            "page_count": 224,
            "binding": "TC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338344066.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The WINGS OF FIRE saga continues!Deep in the rain forest, danger awaits...Glory knows the dragon world is wrong about her tribe. After all, she isn't \"as lazy as a RainWing\" -- she isn't lazy at all! Maybe she wasn't meant to be one of the dragonets of destiny, as the older dragons constantly remind her, but Glory is sharp and her venom is deadly... except, of course, no one knows it.When the dragonets seek shelter in the rain forest, Glory is devastated to find that the treetops are full of RainWings that no dragon could ever call dangerous. They nap all day and know nothing of the rest of Pyrrhia. Worst of all, they don't realize -- or care -- that RainWings are going missing from their beautiful forest. But Glory and the dragonets are determined to find the missing dragons, even if it drags the peaceful RainWing kingdom where they never wanted to be-in the middle of the war.",
        "work_id": 214113,
        "canonical_isbn": "9780545349208"
      },
      {
        "subcategories": [
          "Fantasy - General"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "conceal",
          "uninformative",
          "unconventional",
          "smolder",
          "odd",
          "stable",
          "compound",
          "recover",
          "alternate"
        ],
        "page_count": 432,
        "title_search": "Darkness Dragons",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 561082,
        "copyright": 2017,
        "title": "Darkness of Dragons",
        "measurements": {
          "english": {
            "mlf": 3.62765643956898,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.4510413070993,
            "lexile": 740,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9780545685474",
            "english_language_learner": false,
            "copyright": 2017,
            "published_work_id": 561082,
            "page_count": 432,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685474.jpeg"
          },
          {
            "isbn": "9780545685481",
            "english_language_learner": false,
            "copyright": 2017,
            "published_work_id": 836584,
            "page_count": 432,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685481.jpeg"
          },
          {
            "isbn": "9780545685498",
            "english_language_learner": false,
            "copyright": 2017,
            "published_work_id": 836585,
            "page_count": 432,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685498.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "An ancient evil, a terrible prophecy -- and five dragonets who could save the world . . . Don't miss the most thrilling adventure yet in the New York Times bestselling Wings of Fire series! Qibli knows Darkstalker must be stopped. And he knows he could stop him -- if he had magic. With even a sliver of the ancient dragon's all-powerful scroll, Qibli could rewrite history the right way: end war forever; make every dragon happy; perhaps even cast a very small spell so that everyone would like him . . . Instead, as Darkstalker's dangerous influence spreads across Pyrrhia, entrancing or killing every dragon in the seven tribes, Qibli can only grasp the small animus objects he's borrowed from Turtle. With some clever thinking, Qibli's talons finally hold the power to make a difference. But prophecies are not easy to rewrite. Can Qibli be the magical force Pyrrhia needs, or will he be the one to bring Jade Mountain -- and his family, his friends, his whole world -- crashing down?",
        "work_id": 599613,
        "canonical_isbn": "9780545685474"
      },
      {
        "subcategories": [],
        "english_language_learner": false,
        "vocab_words": [],
        "page_count": 208,
        "title_search": "Winglets Quartet",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 905167,
        "copyright": 2020,
        "title": "Winglets Quartet",
        "measurements": {
          "english": {
            "mlf": 3.6027506914768,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.7873824689111,
            "lexile": 770,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781760978334",
            "english_language_learner": false,
            "copyright": 2020,
            "published_work_id": 905167,
            "page_count": 208,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781760978334.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 10,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry"
        ],
        "language": "english",
        "summary": "",
        "work_id": 842533,
        "canonical_isbn": "9781760978334"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Social Issues",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "concentric",
          "odd",
          "enchant",
          "generous",
          "recover",
          "dispose",
          "alternate",
          "conviction",
          "mindreader"
        ],
        "page_count": 336,
        "title_search": "Talons Power",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 516983,
        "copyright": 2017,
        "title": "Talons of Power",
        "measurements": {
          "english": {
            "mlf": 3.61040870285584,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.0147195537651,
            "lexile": 710,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Personal & social issues (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781742994246",
          "9781338214437",
          "9780062568311",
          "9780545831963"
        ],
        "published_works": [
          {
            "isbn": "9780545685405",
            "english_language_learner": false,
            "copyright": 2017,
            "published_work_id": 516983,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685405.jpeg"
          },
          {
            "isbn": "9780545685429",
            "english_language_learner": false,
            "copyright": 2017,
            "published_work_id": 874549,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685429.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Real Life",
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!For every villain, there is a hero . . . Turtle isn't one of the heroes he reads about in stories. If he were, he'd use his animus powers to help Pyrrhia -- instead of keeping his abilities a secret, even from his own sister. Now that Darkstalker, the sinister and impossibly old dragon from Pyrrhia's most notorious legends, has returned, Turtle knows his own role is simple: hide. And stay hidden.The other dragons at Jade Mountain Academy, on the other hand, think Darkstalker is fascinating. He charms everyone he meets, including Turtle's most skeptical friends. They all seem convinced that the ancient dragon has changed.Turtle isn't so sure. The more he watches Darkstalker from the shadows, the more Turtle knows that someone needs to stop the powerful dragon. A real hero. But Turtle is running out of time to find one, which mean . . . he might have to try to save the day himself.",
        "work_id": 553973,
        "canonical_isbn": "9780545685405"
      },
      {
        "subcategories": [],
        "english_language_learner": false,
        "vocab_words": [],
        "page_count": 301,
        "title_search": "Poison Jungle",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 13,
        "canonical_published_work_id": 722759,
        "copyright": 2019,
        "title": "The Poison Jungle",
        "measurements": {
          "english": {
            "mlf": 3.56378470734832,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.275907373953,
            "lexile": 750,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "General fiction (Children's / Teenage)"
        ],
        "chapter_measurements": [
          {
            "vocab_words": [
              "current",
              "distant",
              "expansive",
              "instant",
              "hive",
              "dragonet",
              "caution",
              "wingbeat",
              "bumblebee",
              "octave"
            ],
            "lexile": 750,
            "name": "1",
            "number": 1
          },
          {
            "vocab_words": [
              "bulb",
              "flex",
              "hunger",
              "limb",
              "chokecherry",
              "pry",
              "barrier",
              "sling",
              "bumblebee",
              "dignify"
            ],
            "lexile": 820,
            "name": "2",
            "number": 2
          },
          {
            "vocab_words": [
              "flare",
              "pardon",
              "execute",
              "spite",
              "wolfsbane",
              "precious",
              "hive",
              "temper",
              "drama",
              "tuber"
            ],
            "lexile": 730,
            "name": "3",
            "number": 3
          },
          {
            "vocab_words": [
              "tendency",
              "infest",
              "hive",
              "restore",
              "barrier",
              "chamber",
              "dragonet",
              "stagger",
              "sidestep",
              "unforgivable"
            ],
            "lexile": 770,
            "name": "4",
            "number": 4
          },
          {
            "vocab_words": [
              "hive",
              "consistent",
              "pokeweed",
              "untrustworthy",
              "complex",
              "barrier",
              "dwell",
              "dragonet",
              "restock",
              "manipulative"
            ],
            "lexile": 780,
            "name": "5",
            "number": 5
          },
          {
            "vocab_words": [
              "inconceivable",
              "tension",
              "bolt",
              "portentous",
              "mint",
              "incisive",
              "scent",
              "scoff",
              "crinkle",
              "council"
            ],
            "lexile": 750,
            "name": "6",
            "number": 6
          },
          {
            "vocab_words": [
              "tense",
              "hive",
              "sweep",
              "mention",
              "wasp",
              "tribe",
              "mycelia",
              "scoff",
              "stem",
              "hemlock"
            ],
            "lexile": 670,
            "name": "7",
            "number": 7
          },
          {
            "vocab_words": [
              "consult",
              "spineless",
              "bargain",
              "implementation",
              "interior",
              "leaflike",
              "bookmaking",
              "rustle",
              "distant",
              "dim"
            ],
            "lexile": 830,
            "name": "8",
            "number": 8
          },
          {
            "vocab_words": [
              "odd",
              "stress",
              "raw",
              "distant",
              "tranquil",
              "bookbinding",
              "significant",
              "frolic",
              "dragonet",
              "random"
            ],
            "lexile": 780,
            "name": "9",
            "number": 9
          },
          {
            "vocab_words": [
              "estimate",
              "slug",
              "relocate",
              "alert",
              "tribe",
              "hive",
              "drama",
              "incoming",
              "faint",
              "distant"
            ],
            "lexile": 680,
            "name": "10",
            "number": 10
          },
          {
            "vocab_words": [
              "organism",
              "formulate",
              "distant",
              "cure",
              "hive",
              "undertake",
              "mention",
              "precision",
              "tribe",
              "wasp"
            ],
            "lexile": 710,
            "name": "11",
            "number": 11
          },
          {
            "vocab_words": [
              "saucier",
              "spiral",
              "slick",
              "chorus",
              "justifiable",
              "plummy",
              "arch",
              "stump",
              "bumblebee",
              "unproductive"
            ],
            "lexile": 860,
            "name": "12",
            "number": 12
          },
          {
            "vocab_words": [
              "stalk",
              "strain",
              "hunger",
              "brace",
              "tragic",
              "scent",
              "snag",
              "bumblebee",
              "sling",
              "lime"
            ],
            "lexile": 760,
            "name": "13",
            "number": 13
          },
          {
            "vocab_words": [
              "tense",
              "discontent",
              "register",
              "slick",
              "maneuver",
              "racket",
              "presence",
              "radiate",
              "sore",
              "gloom"
            ],
            "lexile": 760,
            "name": "14",
            "number": 14
          },
          {
            "vocab_words": [
              "intention",
              "cure",
              "collapse",
              "chorus",
              "mention",
              "tranquil",
              "peace",
              "antidote",
              "hive",
              "wasp"
            ],
            "lexile": 590,
            "name": "15",
            "number": 15
          },
          {
            "vocab_words": [
              "tension",
              "crown",
              "link",
              "focus",
              "hive",
              "tribe",
              "logic",
              "wasp",
              "antidote",
              "experimentation"
            ],
            "lexile": 670,
            "name": "16",
            "number": 16
          },
          {
            "vocab_words": [
              "hive",
              "antidote",
              "indicate",
              "assume",
              "distant",
              "image",
              "wasp",
              "focus",
              "abduct",
              "compass"
            ],
            "lexile": 650,
            "name": "17",
            "number": 17
          },
          {
            "vocab_words": [
              "antidote",
              "hive",
              "sturdiness",
              "spare",
              "atone",
              "bumblebee",
              "quest",
              "sling",
              "dragonet",
              "restart"
            ],
            "lexile": 790,
            "name": "18",
            "number": 18
          },
          {
            "vocab_words": [
              "ungraceful",
              "antidote",
              "tributary",
              "sprawl",
              "chokecherry",
              "grub",
              "diaphanous",
              "latch",
              "jolt",
              "toxin"
            ],
            "lexile": 790,
            "name": "19",
            "number": 19
          },
          {
            "vocab_words": [
              "consume",
              "husk",
              "adapt",
              "disposable",
              "antidote",
              "erupt",
              "outsized",
              "wasp",
              "puppet",
              "core"
            ],
            "lexile": 650,
            "name": "20",
            "number": 20
          },
          {
            "vocab_words": [
              "content",
              "swarm",
              "weave",
              "instant",
              "precise",
              "tangle",
              "arrowroot",
              "retake",
              "viper",
              "smug"
            ],
            "lexile": 780,
            "name": "21",
            "number": 21
          },
          {
            "vocab_words": [
              "notion",
              "assume",
              "slacken",
              "bookbinding",
              "sentimental",
              "endpaper",
              "distant",
              "antidote",
              "hive",
              "huddle"
            ],
            "lexile": 790,
            "name": "22",
            "number": 22
          },
          {
            "vocab_words": [
              "tense",
              "odd",
              "organize",
              "hollow",
              "penmanship",
              "distant",
              "hive",
              "romance",
              "issue",
              "gobble"
            ],
            "lexile": 640,
            "name": "23",
            "number": 23
          },
          {
            "vocab_words": [
              "prove",
              "jerboa",
              "enchant",
              "succession",
              "animus",
              "punctual",
              "conversation",
              "obviousness",
              "snowfall",
              "border"
            ],
            "lexile": 630,
            "name": "EPILOGUE",
            "number": 24
          }
        ],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781338214512",
            "english_language_learner": false,
            "copyright": 2019,
            "published_work_id": 722759,
            "page_count": 301,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214512.jpeg"
          },
          {
            "isbn": "9780780461390",
            "english_language_learner": false,
            "copyright": 2019,
            "published_work_id": 726076,
            "page_count": 301,
            "binding": "LB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214512.jpeg"
          },
          {
            "isbn": "9781338214536",
            "english_language_learner": false,
            "copyright": 2019,
            "published_work_id": 726077,
            "page_count": 301,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214536.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 11,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry"
        ],
        "language": "english",
        "summary": "The New York Times bestselling series continues with a thrilling revelation -- brand-new tribes of dragons! Some secrets are deadly. It's no secret that Sundew wants to destroy the HiveWings. It's her life's mission to exact revenge on the tribe that tried to wipe out the LeafWings and ripped every tree from the surface of Pantala. Every tree, that is, except the wild and dangerous Poison Jungle, where the surviving LeafWings have been hiding since the war. Hiding, plotting, and waiting for a dragon like Sundew, who is uniquely qualified to bring down the Hives. There are dark secrets in the jungle, though-some that Sundew is keeping, and some that she's only just beginning to discover. And now that a new war is upon them, Sundew and her friends must unearth the oldest secret in the jungle-even if what they find has the power to destroy them all.",
        "work_id": 776161,
        "canonical_isbn": "9781338214512"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Social Issues",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "conceivable",
          "katydid",
          "hive",
          "intense",
          "odd",
          "convenient",
          "hollow",
          "reverse",
          "mute",
          "accent"
        ],
        "page_count": 286,
        "title_search": "Hive Queen",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 10,
        "canonical_published_work_id": 688086,
        "copyright": 2018,
        "title": "The Hive Queen",
        "measurements": {
          "english": {
            "mlf": 3.61638898433314,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.8561403508772,
            "lexile": 770,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Personal & social issues (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [
          {
            "vocab_words": [
              "katydid",
              "flare",
              "inlaid",
              "dragonet",
              "visual",
              "caution",
              "spiraling",
              "hemlock",
              "grubby",
              "pure"
            ],
            "lexile": 890,
            "name": "CHAPTER 1",
            "number": 1
          },
          {
            "vocab_words": [
              "hollow",
              "absorb",
              "scent",
              "metamorphosis",
              "contrary",
              "clump",
              "unhelpful",
              "strand",
              "mental",
              "sacred"
            ],
            "lexile": 800,
            "name": "CHAPTER 2",
            "number": 2
          },
          {
            "vocab_words": [
              "convenient",
              "spine",
              "stack",
              "dissent",
              "hive",
              "option",
              "justifiable",
              "katydid",
              "tribe",
              "wasp"
            ],
            "lexile": 630,
            "name": "CHAPTER 3",
            "number": 3
          },
          {
            "vocab_words": [
              "hive",
              "option",
              "harmony",
              "katydid",
              "brief",
              "tranquil",
              "dominate",
              "metamorphosis",
              "yellowjacket",
              "cocoon"
            ],
            "lexile": 750,
            "name": "CHAPTER 4",
            "number": 4
          },
          {
            "vocab_words": [
              "katydid",
              "assume",
              "unifying",
              "snoozy",
              "symbolism",
              "bombardier",
              "tangle",
              "phase",
              "restart",
              "cobalt"
            ],
            "lexile": 840,
            "name": "CHAPTER 5",
            "number": 5
          },
          {
            "vocab_words": [
              "inflexible",
              "flare",
              "katydid",
              "glamour",
              "strand",
              "dim",
              "layout",
              "orderly",
              "slink",
              "unhelpful"
            ],
            "lexile": 880,
            "name": "CHAPTER 6",
            "number": 6
          },
          {
            "vocab_words": [
              "reverse",
              "benefit",
              "hive",
              "tranquil",
              "inlaid",
              "recommendation",
              "beckon",
              "version",
              "lemon",
              "admire"
            ],
            "lexile": 740,
            "name": "CHAPTER 7",
            "number": 7
          },
          {
            "vocab_words": [
              "residential",
              "katydid",
              "classless",
              "emerald",
              "metaphorical",
              "constant",
              "latticed",
              "outlast",
              "vengeance",
              "loom"
            ],
            "lexile": 910,
            "name": "CHAPTER 8",
            "number": 8
          },
          {
            "vocab_words": [
              "katydid",
              "confess",
              "hive",
              "mansion",
              "beam",
              "wasp",
              "pun",
              "tribe",
              "impertinent",
              "jewel"
            ],
            "lexile": 680,
            "name": "CHAPTER 9",
            "number": 9
          },
          {
            "vocab_words": [
              "conceivable",
              "bolt",
              "katydid",
              "hive",
              "glamour",
              "jewel",
              "academic",
              "potential",
              "dim",
              "replant"
            ],
            "lexile": 770,
            "name": "CHAPTER l0",
            "number": 10
          },
          {
            "vocab_words": [
              "spine",
              "hive",
              "theory",
              "mention",
              "confirm",
              "scrape",
              "katydid",
              "fraction",
              "wasp",
              "presence"
            ],
            "lexile": 670,
            "name": "CHAPTER 11",
            "number": 11
          },
          {
            "vocab_words": [
              "reverse",
              "column",
              "hive",
              "katydid",
              "option",
              "tragedy",
              "current",
              "scent",
              "mansion",
              "distant"
            ],
            "lexile": 730,
            "name": "CHAPTER 12",
            "number": 12
          },
          {
            "vocab_words": [
              "katydid",
              "column",
              "solder",
              "invisible",
              "fraction",
              "veil",
              "hemlock",
              "appetizer",
              "commotion",
              "cascade"
            ],
            "lexile": 840,
            "name": "CHAPTER 13",
            "number": 13
          },
          {
            "vocab_words": [
              "katydid",
              "residence",
              "bitter",
              "mansion",
              "succession",
              "assume",
              "hive",
              "inlaid",
              "distant",
              "spidery"
            ],
            "lexile": 790,
            "name": "CHAPTER 14",
            "number": 14
          },
          {
            "vocab_words": [
              "katydid",
              "hollow",
              "spite",
              "minister",
              "hive",
              "wasp",
              "tribe",
              "plumper",
              "hybrid",
              "social"
            ],
            "lexile": 700,
            "name": "CHAPTER 15",
            "number": 15
          },
          {
            "vocab_words": [
              "stationery",
              "hive",
              "predict",
              "clamor",
              "abandon",
              "quantity",
              "simmer",
              "grubby",
              "jewel",
              "wingless"
            ],
            "lexile": 780,
            "name": "CHAPTER 16",
            "number": 16
          },
          {
            "vocab_words": [
              "cackle",
              "finery",
              "vocal",
              "dim",
              "threshold",
              "dragonet",
              "interminable",
              "numb",
              "agony",
              "mindless"
            ],
            "lexile": 900,
            "name": "CHAPTER 17",
            "number": 17
          },
          {
            "vocab_words": [
              "hive",
              "katydid",
              "jewel",
              "theory",
              "succession",
              "assume",
              "wasp",
              "slug",
              "master",
              "contrary"
            ],
            "lexile": 670,
            "name": "CHAPTER 18",
            "number": 18
          },
          {
            "vocab_words": [
              "conceal",
              "spiral",
              "katydid",
              "pantry",
              "irreversible",
              "distant",
              "dim",
              "dragonet",
              "emerald",
              "gust"
            ],
            "lexile": 880,
            "name": "CHAPTER 19",
            "number": 19
          },
          {
            "vocab_words": [
              "mute",
              "hive",
              "katydid",
              "execute",
              "adjust",
              "dragonet",
              "double",
              "maneuver",
              "inject",
              "internal"
            ],
            "lexile": 760,
            "name": "CHAPTER 20",
            "number": 20
          },
          {
            "vocab_words": [
              "hollow",
              "dragonet",
              "ravenous",
              "scent",
              "hive",
              "abandon",
              "dread",
              "identify",
              "wasp",
              "normal"
            ],
            "lexile": 640,
            "name": "CHAPTER 21",
            "number": 21
          },
          {
            "vocab_words": [
              "hive",
              "volume",
              "hollow",
              "reverse",
              "column",
              "pardon",
              "spire",
              "option",
              "arouse",
              "evacuate"
            ],
            "lexile": 730,
            "name": "22",
            "number": 22
          },
          {
            "vocab_words": [
              "accent",
              "interior",
              "distinct",
              "skeletal",
              "haze",
              "boulder",
              "blur",
              "silt",
              "dappled",
              "serene"
            ],
            "lexile": 890,
            "name": "EPILOGUE",
            "number": 23
          }
        ],
        "recommended_isbns": [
          "9781338306040",
          "9781742994246",
          "9781338214437",
          "9780062568311"
        ],
        "published_works": [
          {
            "isbn": "9781338214482",
            "english_language_learner": false,
            "copyright": 2018,
            "published_work_id": 688086,
            "page_count": 286,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214482.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Real Life",
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The #1 New York Times bestselling series continues with a thrilling revelation -- three brand-new tribes of dragons!Growing up in the hives, Cricket has always had a million questions. Why are trees forbidden, even in art? Why do her parents seem to hate her? And the biggest, most dangerous and secret question of all: Why is Cricket immune to Queen Wasp's powers? Whenever the queen takes control of all the HiveWings, speaking through their mouths and seeing through their eyes, Cricket has to hide, terrified of being discovered.Now she's hiding again, wanted for stealing the Book of Clearsight along with her new SilkWing friends, Blue and Swordtail, and the fierce LeafWing, Sundew. The fugitives need answers, and fast, in order to prevent a LeafWing attack. But Cricket has more questions than ever. How can she stay hidden and discover the queen's deadliest secret? And if she does succeed -- can a powerless dragonet really do anything to topple a regime and stop a war?",
        "work_id": 730251,
        "canonical_isbn": "9781338214482"
      },
      {
        "subcategories": [],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "odd",
          "channel",
          "convenient",
          "grate",
          "register",
          "peril",
          "bolt",
          "spiral",
          "resist"
        ],
        "page_count": 336,
        "title_search": "Dragonet Prophecy",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 183165,
        "copyright": 2013,
        "title": "The Dragonet Prophecy",
        "measurements": {
          "english": {
            "mlf": 3.4607222007063,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.3988187752564,
            "lexile": 730,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9780545534901",
            "english_language_learner": false,
            "copyright": 2013,
            "published_work_id": 183165,
            "page_count": 336,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/fiction_nonfiction_poetry.png"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry"
        ],
        "language": "english",
        "summary": "",
        "work_id": 180554,
        "canonical_isbn": "9780545534901"
      },
      {
        "subcategories": [
          "Fantasy - General"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "reconvene",
          "odd",
          "smolder",
          "dispose",
          "scald",
          "liable",
          "register",
          "spacey",
          "singe"
        ],
        "page_count": 144,
        "title_search": "Winglets Collection",
        "author_first_names": [
          "Sutherland"
        ],
        "max_age": 11,
        "canonical_published_work_id": 490058,
        "copyright": 2016,
        "title": "A Winglets Collection",
        "measurements": {
          "english": {
            "mlf": 3.48174345886923,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 11.1048146570089,
            "lexile": 770,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781338126198",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 490058,
            "page_count": 144,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/scifi_fantasy.png"
          }
        ],
        "author_last_names": [
          "Tui"
        ],
        "series_name": "Wings of Fire:",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Sutherland Tui"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "Collection of three Wings of Fire Short Stories : 1. Prisoners 2. Assassin 3. Deserter",
        "work_id": 525332,
        "canonical_isbn": "9781338126198"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "odd",
          "content",
          "enchant",
          "minor",
          "generous",
          "convenient",
          "dispose",
          "alternate",
          "trace"
        ],
        "page_count": 400,
        "title_search": "Darkstalker",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 470234,
        "copyright": 2016,
        "title": "Darkstalker",
        "measurements": {
          "english": {
            "mlf": 3.50740034189052,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.9554256010396,
            "lexile": 750,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781496583482",
          "9781496565556",
          "9781496565549"
        ],
        "published_works": [
          {
            "isbn": "9781338053623",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 470234,
            "page_count": 400,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338053623.jpeg"
          },
          {
            "isbn": "9781338053616",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 506725,
            "page_count": 366,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338053616.jpeg"
          },
          {
            "isbn": "9781338053647",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 506726,
            "page_count": 366,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338053647.jpeg"
          },
          {
            "isbn": "9781338088823",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 506727,
            "page_count": 366,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338053616.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire:",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The first-ever special edition of the New York Times bestselling Wings of Fire series soars back in time to the origin of Pyrrhia's most dangerous dragon: Darkstalker. Three dragons. One unavoidable, unpredictable destiny. This is the beginning... of the end. In the SeaWing kingdom, a young prince learns he is an animus -- capable of wonderful magic that comes with a terrible price. In the mind of a NightWing dragonet, a thousand futures unfold -- and almost all of them, she knows, lead to disaster and destruction. And under three full moons and the watchful eyes of his NightWing mother and IceWing father, the most powerful dragon Pyrhhia will ever know is clawing his way out of his egg. Darkstalker, the dragon who will change the world forever. Long before the SandWing war, lifetimes before the Dragonet Prophecy... darkness is born.",
        "work_id": 504590,
        "canonical_isbn": "9781338053623"
      },
      {
        "subcategories": [
          "Fantasy - General"
        ],
        "english_language_learner": false,
        "vocab_words": [],
        "page_count": 512,
        "title_search": "Dragonslayer",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 754108,
        "copyright": 2020,
        "title": "Dragonslayer",
        "measurements": {
          "english": {
            "mlf": 3.68708331218763,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.9452175617405,
            "lexile": 760,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781338214604",
            "english_language_learner": false,
            "copyright": 2020,
            "published_work_id": 754108,
            "page_count": 512,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214604.jpeg"
          },
          {
            "isbn": "9781743839010",
            "english_language_learner": false,
            "copyright": 2020,
            "published_work_id": 754631,
            "page_count": 496,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781743839010.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire: Legends:",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "This special edition of the #1 New York Times bestselling Wings of Fire series soars back in time to give readers a glimpse of Pyrrhia through new eyes. For decades dragons have wondered how three small scavengers managed to kill Queen Oasis. Until now. Travel back to before the War of SandWing Succession, and experience Pyrrhia as we've never seen it before -- through the eyes of humans.",
        "work_id": 811961,
        "canonical_isbn": "9781338214604"
      },
      {
        "subcategories": [],
        "english_language_learner": false,
        "vocab_words": [
          "contagious",
          "tense",
          "odd",
          "convenient",
          "hive",
          "accent",
          "invisible",
          "axolotl",
          "spacey",
          "distant"
        ],
        "page_count": 368,
        "title_search": "Flames Hope",
        "author_first_names": [
          "Tui"
        ],
        "max_age": 12,
        "canonical_published_work_id": 972979,
        "copyright": 2022,
        "title": "The Flames of Hope",
        "measurements": {
          "english": {
            "mlf": 3.60124867380949,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.5632276194299,
            "lexile": 760,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781761203442",
            "english_language_learner": false,
            "copyright": 2022,
            "published_work_id": 972979,
            "page_count": 368,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781761203442.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire #15",
        "min_age": 10,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry"
        ],
        "language": "english",
        "summary": "<b>The #1 <i>New York Times</i> bestselling series is hotter than ever, and this thrilling conclusion to the Lost Continent Prophecy arc is a must-read!</b> <p><b>With talons united . . .</b></p> <p>Luna has always wanted to change the world -- to fix it, to free it -- even if she's never actually known how. Now that all of dragon - <i>and</i> humankind are in mortal danger, Luna is flying back home to Pantala with a team of dragons on a rescue mission, determined to be brave and useful.</p> <p>But saving a continent isn't as easy as a prophecy makes it sound, and \"facing a great evil\" definitely requires more than the fiery silk that Luna is uniquely able to create. As she fights her way to the abyss that hides the dark roots poisoning Pantala, Luna must uncover a long-buried secret and unite her friends, her enemies, and her own powers. If she doesn't, she won't get to change the world. She'll have to say goodbye to it -- forever.</p>",
        "work_id": 904546,
        "canonical_isbn": "9781761203442"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "contagious",
          "tense",
          "odd",
          "stress",
          "convenient",
          "jerboa",
          "minor",
          "stability",
          "trace",
          "hive"
        ],
        "page_count": 336,
        "title_search": "Dangerous Gift",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 914666,
        "copyright": 2021,
        "title": "The Dangerous Gift",
        "measurements": {
          "english": {
            "mlf": 3.58310494627348,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.3594166535989,
            "lexile": 740,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781338214543",
            "english_language_learner": false,
            "copyright": 2021,
            "published_work_id": 914666,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214543.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire #14:",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The #1 New York Times bestselling series continues! A wall can't protect them anymore . . . Snowfall didn't expect to be queen of the IceWings at such a young age, but now that she is, she's going to be the best queen ever. All she has to do is keep her tribe within IceWing territory, where it's safe -- while keeping every other tribe out, where they belong. It's a perfect and simple plan, backed up by all the IceWing magic Snowfall can find. That is, until a storm of unidentified dragons arrives on her shore, looking for asylum. The foreigners are completely strange and, Snowfall is certain, utterly untrustworthy. But as she escorts the miserable new tribes out of her kingdom, Snowfall is forced to reconsider her plan. Maybe she can only keep her tribe safe . . . if she's willing to risk everything.",
        "work_id": 852101,
        "canonical_isbn": "9781338214543"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "concentric",
          "odd",
          "compact",
          "inconvenient",
          "minor",
          "bolt",
          "unprecedented",
          "hollow",
          "hailstorm"
        ],
        "page_count": 336,
        "title_search": "Winter Turning",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 379302,
        "copyright": 2015,
        "title": "Winter Turning",
        "measurements": {
          "english": {
            "mlf": 3.47676497610669,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 11.3811320754717,
            "lexile": 790,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781484778715",
          "9781496565549",
          "9780525646686"
        ],
        "published_works": [
          {
            "isbn": "9780545685375",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 379302,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685375.jpeg"
          },
          {
            "isbn": "9780545685382",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 858064,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685382.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire Book",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!Daring mission... or deadly mistake?Winter has been a disappointment to his royal IceWing family his whole life. When his sister, Icicle, runs away from Jade Mountain Academy, fleeing terrible crimes and possibly planning to commit more, Winter knows that they both need a second chance to make things right -- if only he can find her. Winter's new clawmates, Moon, Qibli, and Kinkajou, won't let him make this dangerous journey alone. They don't seem to understand that IceWings, the most superior of all dragon tribes, can fix their own problems. When their search leads the dragonets straight into Queen Scarlet's vicious talons, Winter is grateful to have some help. But even the bravest dragons can't follow him to the Ice Kingdom, where he'll have to face the greatest threat of all: his own family.",
        "work_id": 404711,
        "canonical_isbn": "9780545685375"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Social Issues",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "concentric",
          "odd",
          "hive",
          "generous",
          "stress",
          "hollow",
          "spiral",
          "residential",
          "stability"
        ],
        "page_count": 336,
        "title_search": "Lost Continent",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 639718,
        "copyright": 2018,
        "title": "The Lost Continent",
        "measurements": {
          "english": {
            "mlf": 3.6449028543099,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.7677966101695,
            "lexile": 760,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Personal & social issues (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781742994246",
          "9781338214482",
          "9780062568311",
          "9780545831963"
        ],
        "published_works": [
          {
            "isbn": "9781338214437",
            "english_language_learner": false,
            "copyright": 2018,
            "published_work_id": 639718,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214437.jpeg"
          },
          {
            "isbn": "9781338214444",
            "english_language_learner": false,
            "copyright": 2018,
            "published_work_id": 870093,
            "page_count": 336,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338214444.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire Book",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Real Life",
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The #1 New York Times bestselling series continues with a thrilling revelation -- brand-new tribes of dragons!Blue the SilkWing is content. Life in his Hive is safe; he loves his family; he has enough to eat. And Pantala has been at peace for as long as he can remember -- SilkWings and HiveWings live and work together in harmony, and because they stay vigilant, no one has seen a dangerous LeafWing in years. Now that Blue's sister, Luna, is undergoing her Metamorphosis, Blue knows things are going to change. Luna will have her wings and her silk, be assigned a partner and a work order, and move to another Hive. A few days later, Blue's own wings and silk will come in. But nothing could prepare Blue for what happens when Luna's wings start to grow. Suddenly his world is turned upside down, throwing him into dangers he never knew existed. Pantala isn't as peaceful as it seems, and Blue isn't safe. Whether he's ready or not, it's time to adapt -- and fight for his life.",
        "work_id": 678878,
        "canonical_isbn": "9781338214437"
      },
      {
        "subcategories": [
          "Fantasy - General"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "conceal",
          "odd",
          "conversational",
          "recover",
          "hollow",
          "bolt",
          "liable",
          "neutralize",
          "stress"
        ],
        "page_count": 336,
        "title_search": "Moon Rising",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 353827,
        "copyright": 2015,
        "title": "Moon Rising",
        "measurements": {
          "english": {
            "mlf": 3.52475159920063,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.7602513747054,
            "lexile": 730,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9780545685344",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 353827,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685344.jpeg"
          },
          {
            "isbn": "9780545685351",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 819136,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685351.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire Book #6:",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The New York Times-bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!Peace has come to Pyrrhia . . . for now.The war between the tribes is finally over, and now the dragonets of the prophecy have a plan for lasting peace: Jade Mountain Academy, a school that will gather dragonets from all the tribes and teach them to live together, perhaps even as friends.Moonwatcher isn't sure how she feels about school, however. Hidden in the rainforest for most of her life, the young NightWing has an awful secret. She can read minds, and even see the future. Living in a cave with dozens of other dragons is noisy, exhausting--and dangerous.In just a few days, Moon finds herself overwhelmed by her secret powers and bombarded by strange thoughts, including those of a mysterious dragon who might be a terrible enemy. And when someone starts attacking dragons within the academy, Moon has a choice to make: Stay hidden and safe? Or risk everything to save her new friends?",
        "work_id": 378554,
        "canonical_isbn": "9780545685344"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Social Issues",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "odd",
          "peril",
          "convenient",
          "grate",
          "alternate",
          "former",
          "enchant",
          "bolt",
          "soar"
        ],
        "page_count": 336,
        "title_search": "Escaping Peril",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 12,
        "canonical_published_work_id": 429210,
        "copyright": 2016,
        "title": "Escaping Peril",
        "measurements": {
          "english": {
            "mlf": 3.48636521447809,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.8331435079727,
            "lexile": 750,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Personal & social issues (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781742994246",
          "9781338214437",
          "9781338214482",
          "9780062568311"
        ],
        "published_works": [
          {
            "isbn": "9780545685443",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 429210,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685443.jpeg"
          },
          {
            "isbn": "9780545685467",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 828445,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545685467.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Wings of Fire Book Eight:",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Real Life",
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The New York Times and USA Today bestselling series soars to even greater heights with a new prophecy and five new dragonets ready to claim their destiny!Peril has been loyal to Queen Scarlet, who used her fatal firescales to kill countless dragons in the SkyWing arena. Now, Peril is loyal to Clay, the only dragonet who has ever been her friend. So when Scarlet threatens Jade Mountain Academy, Peril sets off to find her former queen, stop her, and save the day, no matter what it takes.There's just one problem: a strangely persistent SeaWing, Turtle, insists on coming along, too. Turtle is worried about his friends, who left to search for Scarlet and haven't returned. Peril is worried that she might accidentally burn Turtle -- or burn him on purpose, for being so annoying -- and frustrated that she keeps saying and doing the wrong things. She can't escape her firescales, and she can't escape her reputation as the deadliest dragon in Pyrrhia.So when she's offered a chance to trade everything for a new life, Peril has to decide who she's really loyal to . . . and whether her own scales might actually be worth saving.",
        "work_id": 456639,
        "canonical_isbn": "9780545685443"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "odd",
          "channel",
          "convenient",
          "grate",
          "register",
          "peril",
          "bolt",
          "resist",
          "current"
        ],
        "page_count": 336,
        "title_search": "Wings Fire",
        "author_first_names": [
          "Tui T."
        ],
        "max_age": 13,
        "canonical_published_work_id": 152177,
        "copyright": 2012,
        "title": "Wings Of Fire ",
        "measurements": {
          "english": {
            "mlf": 3.45763330954171,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.5240310077519,
            "lexile": 740,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9781496583499",
          "9781496583482",
          "9781496565556",
          "9781496565549"
        ],
        "published_works": [
          {
            "isbn": "9780545349185",
            "english_language_learner": false,
            "copyright": 2012,
            "published_work_id": 152177,
            "page_count": 336,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780545349185.jpeg"
          },
          {
            "isbn": "9781407147765",
            "english_language_learner": false,
            "copyright": 2012,
            "published_work_id": 327132,
            "page_count": 366,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781407147765.jpeg"
          }
        ],
        "author_last_names": [
          "Sutherland"
        ],
        "series_name": "Dragonet Prophecy",
        "min_age": 11,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Tui T. Sutherland"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "A thrilling new series soars above the competition and redefines middle-grade fantasy fiction for a new generation! The seven dragon tribes have been at war for generations, locked in an endless battle over an ancient, lost treasure. A secret movement called the Talons of Peace is determined to bring an end to the fighting, with the help of a prophecy -- a foretelling that calls for great sacrifice. Five dragonets are collected to fulfill the prophecy, raised in a hidden cave and enlisted, against their will, to end the terrible war. But not every dragonet wants a destiny. And when the select five escape their underground captors to look for their original homes, what has been unleashed on the dragon world may be far more than the revolutionary planners intended . . .",
        "work_id": 150712,
        "canonical_isbn": "9780545349185"
      },
      {
        "subcategories": [],
        "english_language_learner": false,
        "vocab_words": [
          "discontent",
          "odd",
          "tension",
          "shade",
          "spine",
          "negative",
          "tingle",
          "spark",
          "flare",
          "swarm"
        ],
        "page_count": 144,
        "title_search": "Phoebe Moonlight Dragon",
        "author_first_names": [
          "Maddy"
        ],
        "max_age": 10,
        "canonical_published_work_id": 1005366,
        "copyright": 2022,
        "title": "Phoebe the Moonlight Dragon",
        "measurements": {
          "english": {
            "mlf": 3.64110523206734,
            "syntactic_demand_percentile": 89,
            "semantic_demand_percentile": 99,
            "lexile_code": "",
            "decoding_demand_percentile": 89,
            "measurable": true,
            "msl": 9.29753521126761,
            "lexile": 630,
            "structure_demand_percentile": 88
          }
        },
        "subject_tags": [],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9781338846607",
            "english_language_learner": false,
            "copyright": 2022,
            "published_work_id": 1005366,
            "page_count": 144,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9781338846607.jpeg"
          }
        ],
        "author_last_names": [
          "Mara"
        ],
        "series_name": "Dragon Girls #8:",
        "min_age": 7,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Maddy Mara"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry"
        ],
        "language": "english",
        "summary": "A super collectible series that celebrates the inner fire of everyday girls!The Night Dragons are united in friendship and in a shared mission: They must save the Magic Forest from the evil Fire Sparks. They are out to ruin the delicate balance that exists between night and day--and only the Night Dragons can stop them!Phoebe has a special task ahead of her. She must spread her wings and rescue the Dreamlets, magical creatures who create dreams for all the forest animals. Can Phoebe overcome her fears to help save nighttime?",
        "work_id": 949199,
        "canonical_isbn": "9781338846607"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "contentment",
          "stable",
          "former",
          "odd",
          "conviction",
          "incline",
          "stress",
          "fierce",
          "scent"
        ],
        "page_count": 271,
        "title_search": "Storm Dogs",
        "author_first_names": [
          "Erin"
        ],
        "max_age": 13,
        "canonical_published_work_id": 365455,
        "copyright": 2015,
        "title": "Storm of Dogs",
        "measurements": {
          "english": {
            "mlf": 3.4766100639979,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.7768987341772,
            "lexile": 750,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Animal stories (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9780062823724",
          "9780062343536",
          "9781496554086",
          "9781338290264"
        ],
        "published_works": [
          {
            "isbn": "9780062102768",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 365455,
            "page_count": 271,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102768.jpeg"
          },
          {
            "isbn": "9780062102775",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 365456,
            "page_count": 271,
            "binding": "LB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102775.jpeg"
          },
          {
            "isbn": "9780062102799",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 365457,
            "page_count": 271,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102799.jpeg"
          },
          {
            "isbn": "9780062102782",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 829925,
            "page_count": 304,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102782.jpeg"
          }
        ],
        "author_last_names": [
          "Hunter"
        ],
        "series_name": "Survivors",
        "min_age": 9,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Erin Hunter"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Animals, Bugs & Pets",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "From Erin Hunter, #1 nationally bestselling author of the Warriors series, comes the sixth book in the action-packed Survivors animal fantasy series. Full of \"wild and wonderful adventure\" (Kirkus Reviews, starred review), Survivors will thrill fans of Spirit Animals and Wings of Fire. With Sweet as their new Alpha, the dogs of the Wild Pack hope they will finally find peace. But Lucky is still troubled by visions of a terrifying future--a future that will force every dog to fight tooth and claw for survival. The Storm of Dogs is about to begin....",
        "work_id": 390726,
        "canonical_isbn": "9780062102768"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "discontentment",
          "tense",
          "odd",
          "former",
          "repress",
          "hollow",
          "bolt",
          "stress",
          "scent",
          "bitter"
        ],
        "page_count": 304,
        "title_search": "Pack Divided",
        "author_first_names": [
          "Erin"
        ],
        "max_age": 12,
        "canonical_published_work_id": 435471,
        "copyright": 2015,
        "title": "A Pack Divided",
        "measurements": {
          "english": {
            "mlf": 3.42510342145112,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 11.0716723549488,
            "lexile": 790,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Animal stories (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9780062823687",
          "9781496554086",
          "9781338290264",
          "9780062642103"
        ],
        "published_works": [
          {
            "isbn": "9780062343338",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 435471,
            "page_count": 304,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062343338.jpeg"
          },
          {
            "isbn": "9780062343345",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 435472,
            "page_count": 304,
            "binding": "LB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062343345.jpeg"
          },
          {
            "isbn": "9780062343352",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 435473,
            "page_count": 320,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062343352.jpeg"
          },
          {
            "isbn": "9780062343369",
            "english_language_learner": false,
            "copyright": 2015,
            "published_work_id": 435474,
            "page_count": 304,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062343369.jpeg"
          },
          {
            "isbn": "9780606387675",
            "english_language_learner": false,
            "copyright": 2016,
            "published_work_id": 494274,
            "page_count": 320,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780606387675.jpeg"
          }
        ],
        "author_last_names": [
          "Hunter"
        ],
        "series_name": "Survivors: The Gathering Darkness",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Erin Hunter"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Animals, Bugs & Pets",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "The first book in an epic new series about the Survivors dogs! From Erin Hunter, #1 nationally bestselling author of Warriors, Survivors is full of \"wild and wonderful adventure\" (Kirkus Reviews, starred review) that will thrill fans of Spirit Animals and Wings of Fire. For the first time Storm can remember, she has a place in a Pack, and the world that was devastated by the Big Growl is finally at peace. But tensions are rising among the dogs of the Wild Pack--and the greatest danger they face may come from within.",
        "work_id": 462945,
        "canonical_isbn": "9780062343338"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Adventures & Exploration",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "content",
          "odd",
          "stable",
          "former",
          "hollow",
          "scent",
          "trace",
          "bolt",
          "resist"
        ],
        "page_count": 308,
        "title_search": "Broken Path",
        "author_first_names": [
          "Erin"
        ],
        "max_age": 13,
        "canonical_published_work_id": 286548,
        "copyright": 2014,
        "title": "The Broken Path",
        "measurements": {
          "english": {
            "mlf": 3.39246786613272,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.3037278818072,
            "lexile": 750,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Animal stories (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Travel writing",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [],
        "published_works": [
          {
            "isbn": "9780062102683",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 286548,
            "page_count": 308,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102683.jpeg"
          },
          {
            "isbn": "9780062102706",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 858046,
            "page_count": 336,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102706.jpeg"
          },
          {
            "isbn": "9780062102713",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 858047,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102713.jpeg"
          }
        ],
        "author_last_names": [
          "Hunter"
        ],
        "series_name": "Survivors",
        "min_age": 11,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Erin Hunter"
        ],
        "categories": [
          "Hobbies, Sports & Outdoors",
          "Fiction, Non-fiction & Poetry",
          "Animals, Bugs & Pets",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "From Erin Hunter, #1 nationally bestselling author of the Warriors series, comes the fourth book in the action-packed Survivors animal fantasy series. Full of \"wild and wonderful adventure\" (Kirkus Reviews, starred review), Survivors will thrill fans of Spirit Animals and Wings of Fire. Lucky and Alpha have reached a shaky truce, but tensions within the newly united Pack are still running high. As the dogs search for a home far away from the Fierce Dog camp, they discover that no territory is truly safe--and encounter a terrifying new Pack.",
        "work_id": 296699,
        "canonical_isbn": "9780062102683"
      },
      {
        "subcategories": [
          "Fantasy - General",
          "Action & Adventure"
        ],
        "english_language_learner": false,
        "vocab_words": [
          "tense",
          "concentration",
          "generous",
          "stable",
          "resolve",
          "odd",
          "trace",
          "former",
          "conviction",
          "scent"
        ],
        "page_count": 304,
        "title_search": "Endless Lake",
        "author_first_names": [
          "Erin"
        ],
        "max_age": 10,
        "canonical_published_work_id": 331655,
        "copyright": 2014,
        "title": "The Endless Lake",
        "measurements": {
          "english": {
            "mlf": 3.47300165240426,
            "syntactic_demand_percentile": null,
            "semantic_demand_percentile": null,
            "lexile_code": "",
            "decoding_demand_percentile": null,
            "measurable": true,
            "msl": 10.048190816161,
            "lexile": 700,
            "structure_demand_percentile": null
          }
        },
        "subject_tags": [
          "Animal stories (Children's / Teenage)",
          "Adventure stories (Children's / Teenage)",
          "General fiction (Children's / Teenage)",
          "Fantasy & magical realism (Children's / Teenage)"
        ],
        "chapter_measurements": [],
        "recommended_isbns": [
          "9780062823724",
          "9780062343536",
          "9780062823557",
          "9781338122558"
        ],
        "published_works": [
          {
            "isbn": "9780062102720",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 331655,
            "page_count": 304,
            "binding": "HC",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102720.jpeg"
          },
          {
            "isbn": "9780062102744",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 829168,
            "page_count": 336,
            "binding": "PB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102744.jpeg"
          },
          {
            "isbn": "9780062102751",
            "english_language_learner": false,
            "copyright": 2014,
            "published_work_id": 829171,
            "page_count": 336,
            "binding": "EB",
            "cover_art_url": "https://s3.amazonaws.com/mm-static-media/books/cover-art/9780062102751.jpeg"
          }
        ],
        "author_last_names": [
          "Hunter"
        ],
        "series_name": "Survivors",
        "min_age": 8,
        "book_type": "Trade Fiction",
        "awards": [],
        "authors": [
          "Erin Hunter"
        ],
        "categories": [
          "Fiction, Non-fiction & Poetry",
          "Animals, Bugs & Pets",
          "Science Fiction & Fantasy"
        ],
        "language": "english",
        "summary": "From Erin Hunter, #1 nationally bestselling author of the Warriors series, comes the fifth book in the action-packed Survivors animal fantasy series. Full of \"wild and wonderful adventure\" (Kirkus Reviews, starred review), Survivors will thrill fans of Spirit Animals and Wings of Fire. At the edge of a strange lake that seems to stretch on forever, Lucky and his Pack are about to discover even more new dangers. With the Fierce Dogs on their trail and the Storm of Dogs looming on the horizon, every dog will have to fight for survival--or be swept away.",
        "work_id": 355093,
        "canonical_isbn": "9780062102720"
      }
    ]
  };
  localStorage.setItem('myLocalData', JSON.stringify(data));
  
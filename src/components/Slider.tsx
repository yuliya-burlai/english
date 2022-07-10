import { Carousel } from "react-bootstrap";
import './Slider.scss';

export const Slider = () => (
    <section className="container">
        <div className="row">
        <div className="col">
            <h5 className='h5 text-uppercase'>happy students - my best value</h5>
            <h2 className='h2'>Reviews</h2>
            </div>
        </div>
        <div className="row">
            <div className="col col-xl-8 offset-xl-2">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <h5>Nadiia Vantieieva</h5>
                        <p>Julia is THE teacher, who makes you smile, laugh, enjoy and make learning fun. Her contagious smile itself helps you relax and rely 😄 That's a blessing to find such an experienced and kind teacher. I was her student years ago.. nearly 15 years ago, but I still remember how she made me pronounce "th", safe and pleasant atmosphere in our classroom and her countless stories. I do recommend her as a teacher, she'll definitely help you get where you want to be 😉</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>Bangkok Soap Opera</h5>
                        <p>Highly recommend Julia to anyone who wants to boost their level in English!
                            She will help you find your own way,  find joy in learning process & support you until reaching the planned result.  Julia experience in IT is an amazing bonus for anyone, who plans to be recruited or keep on working in IT. Thank you Julia, you are always my #1 teacher!</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>Eugene Generalov</h5>
                        <p>Had the opportunity to study English with Julia. Classes with an attentive and positive attitude, make English learning is easy and effective. If you are going to learn English or you need to improve your level, I recommend Julia. Best teacher! 👍</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>Oleksiy Godz</h5>
                        <p>Amazing teacher, classes are fun and exciting. Thanks to Yuliya I was able to apply for a school in the U.S. and pass all of the required tests. Now I am studying in New York.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>Dennis Balon</h5>
                        <p>Julia is the best choice if you would like to learn English! Very deep knowledge of the subject but what is even more important she is an extremely talanted teacher! Look no further if you are looking for a truly outstanindg tutor.</p>
                    </Carousel.Item>
                    <Carousel.Item>
                        <h5>Yulya Lutaya</h5>
                        <p>Юлия учитель английского от Бога, найдёт подход к любому человеку. Если учить язык, то только с Юлей. Имеет огромный опыт работы.
Занятия проходят легко и весело. Научит любого! Рекомендую от всей души! Супер учитель и человек. Рада что мы знакомы уже много лет!</p>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </section>
);
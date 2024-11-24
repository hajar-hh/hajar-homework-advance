import { useEffect, useState } from "react";
import { getData } from "../utils/dataServices";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";

function Home() {
  const [arrayOfImages, setArrayOfImages] = useState([]);

  useEffect(() => {
    // fetch("https://picsum.photos/v2/list?&limit=5")
    //   .then((res) => res.json())
    //   .then((data) => setArrayOfImages(data));
    getData("https://picsum.photos/v2/list?&limit=5").then((data) => {
      setArrayOfImages(data);
    });
  }, []);

  return (
    <>
      <Carousel>
        {arrayOfImages?.map((img) => {
          return (
            <Carousel.Item key={img.id}>
              <Image src={img.download_url} fluid style={{ maxHeight: "100vh", width: "100vw" }} />
            </Carousel.Item>
          );
        })}
      </Carousel>

      <Container>
        <Row>
          <Col className="m-5 d-flex justify-content-center align-items-center">
            <p className="text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora mollitia, modi sint delectus facilis placeat neque totam est nostrum, iure assumenda optio vel aliquam doloribus accusamus deleniti sequi temporibus eaque eius possimus. Deserunt eius hic quam numquam doloremque dignissimos quo reprehenderit veritatis necessitatibus? Odit aut qui est ipsam exercitationem molestiae cum nulla ullam quos necessitatibus. Numquam maiores inventore maxime provident rem qui consequatur autem officiis veniam ad excepturi iusto, voluptate ipsum voluptas suscipit sint dolor consectetur, recusandae reiciendis perspiciatis assumenda? Ea quam amet quaerat incidunt doloribus, numquam sapiente obcaecati cupiditate, earum consequuntur iure facilis dignissimos veritatis repellat optio magni beatae at officiis molestiae quod! Quod, consectetur sit labore ratione atque ipsa. Similique, quos cumque, voluptates officiis saepe deserunt possimus voluptatem excepturi dignissimos sunt est, fuga ab harum! Molestiae similique tempora, rerum fugiat eum a vel, quos est architecto expedita corporis provident perferendis doloremque, placeat veritatis. Repudiandae temporibus repellendus sint et.
            </p>
          </Col>
          <Col className="m-5">
            <Image alt="image" src="https://picsum.photos/400" roundedCircle />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

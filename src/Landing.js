import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AiOutlineInstagram } from "react-icons/ai";
import { SiUpwork } from "react-icons/si";
import { FiGithub } from "react-icons/fi";

let theStory = `When I was a kid, like 13, my childhood was pretty boring, except computer lab although we had to learn turtle on a black and white computer. At the time the coolest thing was changing wallpapers. <br/> <br/>

When I would get home, I would just cycle round and round near my house because in my neighborhood there was no one who was same age as me. You can say, you had a cycle! You could have just gone to your friends house? Well, In India and specially in my city, roads are almost lawless, anyone can get a license. So, I was not allowed to cycle on the road. What about your school? You must have had friends there? Yes! I did, I was friends with this kid “Gyanendra” but the school we were in didn't have higher classes after 4th grade. So, we lost touch and I don’t know where he is right now. <br/> <br/>

Also, I was a pretty average kid, so almost everyone except my mother and grandpa looked down at me. I really love you grandpa. <br/> <br/>

There must be something cool about your childhood? Yeah! Once every few months, I would meet my cousin, we were best buddies, his family was very well-off. So, he had PSP, computers, laptops, and even a bike simulator. He got me interested in technology, I don’t think I would be pursuing technology, If I wouldn’t have met him. I say this because, one day he showed me a small game he made using Powerpoint and I was like you can make games using Powerpoint, I was blow away and after a lot of begging he taught me how to do it. <br/> <br/>

When I went back home, I crammed my Grade 7 computer science book and I got quite good at the subject, I really liked this feeling of being good at something and then I learned how to write .bat program, I would make this really cool martrix effect and loved doing other quirky things with it. By the time I was in grade 8, I had crammed Computer science book upto Grade 10. Other than the new found knowledge of computer, it also improved my English. I remember reading 3 computer science books in a week.<br/> <br/> 

When I got into grade 8, my school changed again because the school I was in didn’t have higher classes. The new school was DAV, there I met two of the most amazing and talented friends, mainly Saurav and Ranjan. Ranjan was a game dev rookie and the class topper while Saurav was a rookie 3D artist and physics topper. Saurav and I had a love and hate relationship, we have fought on everything from the the weight of photon to why there isn’t an i6 processor. So, I used to annoy him a lot and he was also good at being mean and annoying. <br/> <br/>

Ranjan was very different from Saurav, rather than fighting, he would correct me without making me look like a fool, his words were calculated yet humble. So we ended up bonding really well. <br/> <br/>

In the coming years I and saurav worked for a game company as a 3D artist we made 4K **ruppes** a month while in 10th, grade which was pretty cool at the time. <br/> <br/>

When Saurav and I were working on a small game he would say “You will never be able to make this” while pointing at a deformed face mesh in blender and he would say “We would build the game and not let you control anything”, I never understood his humor. He taught me so many things that I would fall short of admitting plus, he was far more talented and hard working than me. <br/> <br/>

When I was in 12th I started freelancing, I ended up gaining a lot of knowledge but my grades tanked (It was already low) but I got 87/100 in physics. So, that’s the silver lining. <br/> <br/>

I joined LPU in summer of 2020. At the end of the semester, I realized I have mistaken semester fees with annual fees but rather than telling Papa, I tried earning that 80K rupees by my self, and to my surprise I succeeded. Well not technically, at the time it used to take 1 week for money to be released from upwork. So, I had to borrow 30K from my mother which I returned later. I also paid the hosted fees for the the 3rd year.  <br/> <br/>

During this period, I learned about react (even tried creating my own react library), learned flutter, laravel & started work on a open source social network and created a few games.   `;

const Container = styled.div`
  font-size: 21px;

  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Top = styled.div`
  width: 38vw;
  @media only screen and (max-width: 700px) {
    width: 80%;
  }
`;
const NameAndImage = styled.div`
  display: flex;
  flex-direction: row;
  gap: 50px;
  align-items: center;
  margin-bottom: 50px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const Face = styled.img`
  height: 190px;
  width: 190px;
  border-radius: 500px;
`;
const Name = styled.div`
  font-weight: 900;
`;
const FirstName = styled.div`
  font-size: 100px;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const LandName = styled.div`
  font-size: 110px;
  height: 95px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Intro = styled.div`
  margin-bottom: 15px;
`;
const IntroDetailed = styled.div`
  margin-bottom: 25px;
  opacity: 0.5;
`;

const SocialLinks = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  gap: 25px;
  font-size: 30px;
  margin-bottom: 100px;
`;
const Socail = styled.a`
  color: #fff;
`;
const Heading = styled.div`
  font-weight: 900;
  font-size: 50px;
  margin-bottom: 25px;

  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`;
const Box = styled.div`
  margin-bottom: 100px;
`;
const ProjectList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 50px;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Project = styled.a`
  border-radius: 25px;
  width: 300px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  color: #fff;
  text-decoration: none;
  background-color: #111;
  height: 300px;
  gap: 25px;

  @media only screen and (max-width: 700px) {
    height: auto;
  }
  /* border-width: 3px;
  border-style: solid; */
  /* border-image: linear-gradient(to bottom, #fff, rgba(0, 0, 0, 0)) 1 100%; */
`;

const Gradient = styled.div`
  background: linear-gradient(to right, #999, #555);
  padding: 3px;
  border-radius: 25px;
`;

const ProjectName = styled.div`
  font-weight: 900;
`;
const ProjectDetail = styled.div``;
const ReviewList = styled.div`
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Review = styled.div`
  width: 38vw;
  border-left: 5px solid #fff;
  padding-left: 15px;
  margin-bottom: 50px;

  @media only screen and (max-width: 700px) {
    width: auto;
  }
`;
const Story = styled.div`
  /* white-space: pre; */
  width: 38vw;
  @media only screen and (max-width: 700px) {
    width: auto;
  }
`;

const ReadMoreButton = styled.button`
  border: 1px solid #fff;

  background-color: transparent;
  padding: 10px 25px;
  border-radius: 25px;
  margin-top: 50px;
  color: #fff;
`;

export default function Landing() {
  const [readMore, setReadModeStatus] = useState(false);

  useEffect(() => {
    if (window.location.href.indexOf("paratimevideo") !== -1) {
      window.location.href = "https://www.youtube.com/watch?v=G-O-KQyFiJo";
    }
  }, []);

  return (
    <Container>
      <Top>
        <NameAndImage>
          <Face src="/face.jpg" />
          <Name>
            <FirstName>ARNAV</FirstName>
            <LandName>SINGH</LandName>
          </Name>
        </NameAndImage>

        <Intro>Freelancer . Full Stack Dev . 3D Artist . Game Dev</Intro>
        <IntroDetailed>
          Hi! I started freelancing in 2020 during lockdown, since then I have
          learned about a lot of technologies like React.js, Laravel, Next.js,
          MongoDB, unity & Blender. I have worked with people across the globe,
          mainly Brazil & USA. I have worked with big projects with more than
          500 files and I have also created big projects from scratch. You can
          contact me on{" "}
          <u>
            <i> arnav010singh@gmail.com</i>
          </u>
        </IntroDetailed>

        <SocialLinks>
          <Socail target="_blank" href="https://www.instagram.com/arnavzek/">
            <AiOutlineInstagram />
          </Socail>
          <Socail target="_blank" href="https://github.com/arnavzek">
            <FiGithub />
          </Socail>
          <Socail
            target="_blank"
            href="https://www.upwork.com/freelancers/~014746df0318f0509c"
          >
            <SiUpwork />
          </Socail>
        </SocialLinks>
      </Top>

      <Box>
        <Heading>My Projects</Heading>

        <ProjectList>
          <Gradient>
            <Project target="_blank" href="https://www.upon.one">
              <ProjectName>upon.one</ProjectName>

              <ProjectDetail>
                An open source social network for professionals with a built in
                site builder
              </ProjectDetail>
            </Project>
          </Gradient>

          <Gradient>
            <Project
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.clawon.riftoff"
            >
              <ProjectName>Finn: The eagle without wings</ProjectName>

              <ProjectDetail>
                A platformer game about a eagle that is born without wings, he
                is mocked all his childhood so he build himself a hoverbike and
                goes off on an adventure
              </ProjectDetail>
            </Project>
          </Gradient>
        </ProjectList>
      </Box>

      <Box>
        <Heading>Freelancing Reviews</Heading>
        <ReviewList>
          <Review>
            "He is a young talented developer. He can learn new technologies and
            is able to learn them quickly. He is knowledgeable and has
            recommended some tools we were not currently using. He completed our
            website and included an administration panel. He is good at the
            back-end and the front-end for responsive websites. He is a great
            hire choice."
          </Review>

          <Review>
            "My favorite developer, very responsible, always offers a lot of
            quality in the tasks. Thanks and I see you in the next job."
          </Review>

          <Review>
            "Arnav was very helpful and completed the work in good time.
            Hopefully, I will work with him again in the future."
          </Review>
        </ReviewList>
      </Box>

      <Box>
        <Heading>My Story</Heading>

        <Story
          dangerouslySetInnerHTML={{
            __html: readMore ? theStory : theStory.slice(0, 100) + "...",
          }}
        ></Story>

        {readMore ? null : (
          <ReadMoreButton
            onClick={() => {
              setReadModeStatus(true);
            }}
          >
            Read More
          </ReadMoreButton>
        )}
      </Box>
    </Container>
  );
}

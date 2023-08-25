export default function AboutPage() {
  return (
    <div className="page-container">
      <div className="main-about-container">
        <h3>About Page</h3>
        <h5>Capstone Process</h5>
        <p>
          As I pondered the process in which I wanted to take on this Project, I
          first glanced over the instructions to build my wireframe. The
          wireframe has been a challenge creating the outline that I wanted to
          follow. The changes needing to be done to the wireframe was
          unexpected, especially after building the individual pages and testing
          the functionality. The useState and functions proved to be more tricky
          when trying to figure out how to pass them as props from one child to
          another. Then trying to return it back to the parent to then be passed
          to another child. If you take a look at my App.js and how it is
          working with Products.js, Cart.js and CardComp.js
        </p>
        <h5>Challenges Overcome in Frontend</h5>
        <p>
          There were a variety of challenges in the frontend course that I
          faced. Was it difficult learning multiple languages in a short amount
          of time? Yes it was. I solved a lot of my problems through studying
          and asking the instructor an endless amount of questions. Although
          there were difficulties keeping up with the amount of material
          presented to us and our instructor swithed out mid course, I was able
          to be stretched further than I have gone before with technology and
          Web-Development. This course has openned my eyes to the endless ways
          of creating things in code.
        </p>
        <h5>Favorite Languages</h5>
        <p>
          My Two Favorite Languages in Frontend are React and Scss. It was a
          tough choice between vanila JavaScript and React until I figured how
          helpful it was in React to put in and take out components. Which
          components allow you to pass in multiple pieces you can put together
          making it more managable when changing things in and out. My second
          Favorite Language is Scss because of the structure in the styles when
          nesting styles within one another. It helps me organize my code and
          navigate through my styles. Css tends to allow you to put styles where
          ever you want making it easier to get lost in the code and slow you
          down.
        </p>
      </div>
    </div>
  );
}

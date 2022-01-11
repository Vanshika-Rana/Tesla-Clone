import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      
      <Header />
      <Hero
        bgimg="model-3.jpg"
        heading="Model 3"
        subheading="Order Online for "
        link="Touchless Delivery"
        leftbuttonText="Custom Order"
        rightbuttonText="Existing Inventory"
        imgsrc="/images/down-arrow.png"
      />
      <Hero
        bgimg="model-y.jpg"
        heading="Model Y"
        subheading="Order Online for "
        link="Touchless Delivery"
        leftbuttonText="Custom Order"
        rightbuttonText="Existing Inventory"

      />
      <Hero
        bgimg="model-s.jpg"
        heading="Model S"
        subheading="Order Online for "
        link="Touchless Delivery"
        leftbuttonText="Custom Order"
        rightbuttonText="Existing Inventory"

      />
      <Hero
        bgimg="model-x.jpg"
        heading="Model X"
        subheading="Order Online for "
        link="Touchless Delivery"
        leftbuttonText="Custom Order"
        rightbuttonText="Existing Inventory"

      />
      <Hero
        bgimg="solar-panel.jpg"
        heading="Solar Panels"
        subheading="Lowest Cost Solar Panels in America"
        leftbuttonText="Order Now"
        rightbuttonText="Learn More"

      />
      <Hero
        bgimg="solar-roof.jpg"
        heading="Solar Roof"
        subheading="Produce Clean Energy From Your Roof"
        leftbuttonText="Order Now"
        rightbuttonText="Learn More"

      />
      <Hero
        bgimg="accessories.jpg"
        heading="Accessories"
        leftbuttonText="Shop Now"

      />
    </div>
  );
}

export default App;

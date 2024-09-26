import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
  // Handle cases where pizzaList might be undefined or null
  const safePizzaList = pizzaList || [];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
        {safePizzaList.length > 0 ? (
          safePizzaList.map((pizza) => (
            <PizzaCard key={pizza._id} pizza={pizza} />
          ))
        ) : (
          <p>No pizzas available at the moment.</p>
        )}
      </div>
    </div>
  );
};

export default PizzaList;

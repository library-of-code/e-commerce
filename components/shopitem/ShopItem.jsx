import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import styles from './ShopItem.module.css';

export default ({ title, description, image, ...props }) =>
    <Card
        hoverable
        style={{ width: 300, objectFit: "cover" }}
        cover={<img className={styles.image} alt="example" src={image} />}
        onClick={() => props.handler({ title, description, image })}
    >
        <Meta title={title} description={description} />
    </Card>
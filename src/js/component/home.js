import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("green");
	return (
		<div className="text-center">
			<div className="box-stick"></div>
			<div className="box">
				<div
					className={`semaforo green ${
						color === "green" ? "light" : ""
					}`}
					onClick={() => setColor("green")}></div>
				<div
					className={`semaforo yellow ${
						color === "yellow" ? "light" : ""
					}`}
					onClick={() => setColor("yellow")}></div>
				<div
					className={`semaforo red ${color === "red" ? "light" : ""}`}
					onClick={() => setColor("red")}></div>
			</div>
		</div>
	);
}

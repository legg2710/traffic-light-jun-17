import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("green");
	return (
		<div className="text-center">
			<span> {"color"} </span>
			<div>
				{""}
				<button
					className={`green-bulb ${
						color === "green-bulb" ? "light-on" : ""
					}`}
					onClick={() => setColor("green-bulb")}></button>{" "}
			</div>
			<div>
				<button
					className={`yellow-bulb ${
						color === "yellow-bulb" ? "light-on" : ""
					}`}
					onClick={() => setColor("yellow-bulb")}></button>{" "}
			</div>
			<div>
				<button
					className={`red-bulb ${
						color === "red-bulb" ? "light-on" : ""
					}`}
					onClick={() => setColor("red-bulb")}></button>{" "}
			</div>

			<div className="box"></div>
		</div>
	);
}

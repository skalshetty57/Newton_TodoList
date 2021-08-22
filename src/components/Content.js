import React from "react"
import Tasks from "./Tasks"
import Sidebar from "./Sidebar"
import { useState } from "react"
import "./Content.scss"
const Content = () => {
	const [selectedTab, setSelectedTab] = useState("INBOX")
	return (
		<section className="content">
			<Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
			<Tasks selectedTab={selectedTab} />
		</section>
	)
}

export default Content

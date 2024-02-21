import React from "react"
import {isRouteErrorResponse, useRouteError} from "react-router-dom"
import styles from "./ErrorMessage.module.scss"

const ErrorMessage = () => {
	const error = useRouteError()
	let message

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			message = <div>This page doesn't exist!</div>
		}

		if (error.status === 401) {
			message = <div>You aren't authorized to see this</div>
		}

		if (error.status === 503) {
			message = <div>Looks like our API is down</div>
		}

		if (error.status === 418) {
			message = <div>🫖</div>
		}
	} else message = <div>Something went wrong</div>

	return (
		<div className={styles.errorMessage}>
			<div className={styles.content}>
				<svg
					width="80%"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
						clipRule="evenodd"
					/>
				</svg>
				<p>{message}</p>
			</div>
		</div>
	)
}

export default ErrorMessage

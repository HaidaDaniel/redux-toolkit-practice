import {lazy, ComponentType, createElement, Suspense} from "react"
import {ErrorBoundary} from "react-error-boundary"

export type PreloadableComponent<T extends ComponentType<any>> = T & {
	preload: () => Promise<void>
}

const PathWrapper = (Component: any) => (props: any) =>
	(
		<ErrorBoundary fallbackRender={(fallbackProps) => <>error</>}>
			<Suspense fallback={<div>Loading...</div>}>
				<Component {...props} />
			</Suspense>
		</ErrorBoundary>
	)

const lazyWithPreload = <T extends ComponentType<any>>(
	factory: () => Promise<{default: T}>
) => {
	let LoadedComponent: T | undefined
	let factoryPromise: Promise<void> | undefined
	const LazyComponent = lazy(factory)
	const loadComponent = () =>
		factory().then((module) => {
			LoadedComponent = module.default
		})
	const Component = ((props) =>
		createElement(
			LoadedComponent || LazyComponent,
			props
		)) as PreloadableComponent<T>
	Component.preload = () => factoryPromise || loadComponent()
	return PathWrapper(Component)
}

export default lazyWithPreload

<template>
	<Comp>
		<div class="circle"></div>
		<div class="circle"></div>
		<Icon name="star" />
		<Icon name="star" />
		<svg width="36" height="33" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M18 0L23.2901 10.7188L35.119 12.4377L26.5595 20.7812L28.5801 32.5623L18 27L7.41987 32.5623L9.44049 20.7812L0.880983 12.4377L12.7099 10.7188L18 0Z"
				fill="var(--accent)" />
		</svg>
		<svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M23 1.12978L29.6051 14.5131L29.7214 14.7488L29.9815 14.7866L44.7509 16.9327L34.0637 27.3502L33.8754 27.5336L33.9199 27.7927L36.4428 42.5024L23.2327 35.5574L23 35.4351L22.7673 35.5574L9.55722 42.5024L12.0801 27.7927L12.1246 27.5336L11.9363 27.3502L1.24913 16.9327L16.0185 14.7866L16.2786 14.7488L16.3949 14.5131L23 1.12978Z"
				stroke="var(--accent)" />
		</svg>
	</Comp>
</template>

<style scoped lang="scss">
	.v-enter-active * {
		transition: 1s $ease-out-smooth;
	}

	.v-leave-active * {
		transition: 100ms $ease-in-max;
	}

	:comp > * {
		position: absolute;
	}

	.circle {
		@include circle;

		.v-enter-from &,
		.v-leave-to & {
			scale: 0;
		}

		&:nth-of-type(1) {
			@include square(250px);
			top: -100px;
			left: -100px;
			border: 25px solid c(accent, 10%);
		}

		&:nth-of-type(2) {
			@include square(200px);
			right: 10%;
			bottom: -120px;
			border: 25px solid c(accent, 10%);
		}
	}

	.icon {
		color: c(accent, 10%);

		&:nth-of-type(1) {
			top: calc(50% - 125px);
			left: 32%;
			font-size: 250px;
			rotate: 42deg;

			.v-enter-from & {
				scale: 0;
				rotate: 180deg;
			}

			.v-leave-to & {
				scale: 0;
				rotate: -90deg;
			}
		}
	}

	svg {
		&:nth-of-type(1) {
			top: 35px;
			right: 40%;

			.v-enter-from & {
				translate: 128px;
				rotate: 180deg;
			}

			.v-leave-to & {
				translate: -64px;
				rotate: -90deg;
			}
		}

		&:nth-of-type(2) {
			right: 30%;
			bottom: 36px;

			.v-enter-from & {
				translate: 256px;
				rotate: -180deg;
			}

			.v-leave-to & {
				translate: -128px;
				rotate: 90deg;
			}
		}
	}
</style>

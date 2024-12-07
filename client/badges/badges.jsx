const React = require('react');
const _     = require('lodash');
const createClass = require('create-react-class');

const BadgeRender = require('./badgeRender/badgeRender.jsx');
const Controls = require('./controls/controls.jsx');
const NaturalCritIcon = require('naturalcrit/components/naturalcritLogo.jsx');

const Badges = createClass({
	getDefaultProps: function() {
		return {

		};
	},
	getInitialState: function() {
		return {
			title: '',
			text: '',
			color : '#2b4486',
			//rawSVG: ''
			rawSVG : `<svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 100 125" x="0px" y="0px"><title>50Icon_5px_grid</title><path d="M93.43,42a1.57,1.57,0,0,0-.65-1L61.47,19.21a1.57,1.57,0,0,0-2.18.39l-4.6,6.6a1.57,1.57,0,0,0,.39,2.18l.73.51-5.7,8.19a1.57,1.57,0,1,0,2.57,1.79l5.7-8.19,1.33.92L54,39.8a1.57,1.57,0,0,0,2.57,1.79l5.7-8.19,1.33.92-5.7,8.19a1.57,1.57,0,1,0,2.57,1.79l5.7-8.19L67.5,37l-5.7,8.19A1.57,1.57,0,0,0,64.37,47l5.7-8.19,1.33.92-5.7,8.19a1.57,1.57,0,1,0,2.57,1.79L74,41.55l1.33.92-5.7,8.19a1.57,1.57,0,0,0,2.57,1.79l5.7-8.19,1.33.92-5.7,8.19a1.57,1.57,0,1,0,2.57,1.79L81.77,47l1.33.92-5.7,8.19A1.57,1.57,0,1,0,80,57.89l5.7-8.19.73.51a1.57,1.57,0,0,0,2.18-.39l4.6-6.6A1.56,1.56,0,0,0,93.43,42Zm-6.53,4.7-.72-.5h0l-3.88-2.71h0L78.38,40.8h0l-3.88-2.71h0l-3.89-2.71h0l-3.88-2.71h0l-3.89-2.71h0l-3.89-2.71h0l-.72-.5,2.81-4,28.75,20Z"/><path d="M87.69,69.57c-1.28-4.69-6.83-6-13.26-7.53a60.75,60.75,0,0,1-9.9-3c-6.84-2.94-13.31-8.9-18-13.25C45.17,44.62,44,43.54,43,42.7,41.25,41.21,39.43,40,38,41c-.87.6-1.11,1.77-.69,3.16v4.06l-5.83,3.37c-4.81,2.78-5.06,2.64-9.25.19-.8-.47-1.72-1-2.8-1.6C13.84,47.12,12,47.28,11,47.77a2.1,2.1,0,0,0-1,.9C3,58.29,8.66,71.14,9.81,73.49v5A1.57,1.57,0,0,0,11.37,80h17A1.57,1.57,0,0,0,30,78.45V74a14.33,14.33,0,0,1,3.49,0c2,.19,4.11,1.56,6.61,3.15,1.36.86,2.76,1.75,4.33,2.59,1.86,1,6.07,1.35,11.62,1.35,5.79,0,13-.39,20.6-.84C79,80.09,81,80,82.42,79.9c3.24-.14,5.45-.53,6.49-2.06s.43-3.26-.33-5.47C88.3,71.56,88,70.63,87.69,69.57Zm-1.37,6.5c-.08.09-.64.55-4,.7-1.46.06-3.48.18-5.83.33-8.83.53-27.21,1.64-30.55-.14-1.46-.78-2.82-1.64-4.13-2.47-2.72-1.72-5.28-3.35-8-3.62-.75-.07-1.43-.1-2-.1a11.21,11.21,0,0,0-3.92.56,1.57,1.57,0,0,0-1,1.46v4.11H12.94V73.12a1.58,1.58,0,0,0-.18-.73c-.07-.13-6.63-12.93-.31-21.75.54.06,2,.41,5.45,2.28,1.06.58,1.95,1.1,2.73,1.56,4.77,2.78,6.27,3.37,12.4-.18l6.61-3.83a1.57,1.57,0,0,0,.78-1.36V44.64l.55.45c1,.82,2.11,1.87,3.4,3.06,1,.92,2.07,1.91,3.21,2.93L42,57.78a1.57,1.57,0,0,0,2.41,2l5.53-6.64c1,.85,2,1.71,3.11,2.54l-5,6a1.57,1.57,0,0,0,2.41,2l5.09-6.11,0-.06A43.17,43.17,0,0,0,63.29,62,63.79,63.79,0,0,0,73.71,65.1c5.45,1.3,10.16,2.41,11,5.31.31,1.13.65,2.12.95,3A9.64,9.64,0,0,1,86.32,76.07Z"/><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Loka Mariella</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`
			//rawSVG : `<svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" viewBox="0 0 100 125" version="1.1" x="0px" y="0px"><g transform="translate(0,-952.36216)"><path style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#000000;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:6.83980083;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate" d="m 74.716207,977.9825 c -2.33814,0 -4.23897,1.90178 -4.23897,4.23992 4.9e-4,2.35274 1.90146,4.23993 4.23897,4.23993 2.35273,0 4.25988,-1.88719 4.25988,-4.23993 0,-2.33814 -1.90715,-4.23992 -4.25988,-4.23992 z m -27.04007,0.90006 c -1.36698,-0.0127 -2.73316,0.41368 -3.84168,1.22703 -1.54816,1.13574 -2.46914,2.87771 -3.04047,4.61915 -0.56963,1.73624 -0.83613,3.50877 -1.2945,5.18179 -0.45746,1.66981 -1.13734,3.28906 -2.30292,4.44621 -0.5814,0.57719 -1.28191,1.03116 -2.04155,1.27165 -0.7571,0.23986 -1.58666,0.26283 -2.32192,0.0268 -0.53862,-0.17314 -1.04275,-0.48764 -1.4789,-0.88483 -0.43703,-0.39796 -0.81015,-0.87948 -1.13577,-1.40192 -0.65175,-1.04571 -1.10876,-2.2543 -1.70699,-3.44346 -0.59983,-1.19229 -1.37592,-2.39946 -2.5681,-3.18872 -0.59795,-0.39582 -1.29154,-0.67344 -2.02919,-0.7442 -0.7407,-0.071 -1.51133,0.0728 -2.16701,0.47145 -0.46537,0.28297 -0.84256,0.67577 -1.13007,1.11296 -0.28682,0.43611 -0.48377,0.91286 -0.61969,1.39428 -0.27148,0.96143 -0.30447,1.92714 -0.36877,2.83611 -0.0642,0.9076 -0.16556,1.78499 -0.49423,2.5396 -0.16389,0.37626 -0.38383,0.72016 -0.65866,0.9951 -0.27361,0.27378 -0.60879,0.48225 -0.9609,0.58167 -0.59746,0.16861 -1.30012,0.0321 -1.89803,-0.29558 l -9.7e-4,0 c -0.60563,-0.33183 -1.131881,-0.84916 -1.622411,-1.42469 -0.49129,-0.57646 -0.95689,-1.21968 -1.52165,-1.82013 -0.56631,-0.60206 -1.24455,-1.16576 -2.08052,-1.47506 -0.6830401,-0.25271 -1.4290001,-0.31432 -2.1442001,-0.1768 -0.7152,0.13748 -1.38588,0.47111 -1.92655,0.959 -0.54064,0.48794 -0.94108,1.1208 -1.15098,1.81818 -0.2099,0.69738 -0.22525,1.44557 -0.0437,2.15089 a 0.48674947,0.48674947 0 0 0 0.94284,-0.24239 c -0.13646,-0.53023 -0.12456,-1.10386 0.0333,-1.62811 0.15779,-0.52424 0.46414,-1.0094 0.8706,-1.37622 0.40645,-0.36682 0.92036,-0.62186 1.45798,-0.72522 0.53763,-0.10336 1.10987,-0.0569 1.6233601,0.13309 0.63261,0.23407 1.20237,0.69043 1.70889,1.22893 0.50806,0.5401 0.96494,1.1696 1.48934,1.78489 0.52517,0.61622 1.12855,1.22654 1.896131,1.64713 0.7753,0.42488 1.72226,0.63495 2.63178,0.37826 0.53521,-0.1511 1.00568,-0.4513 1.38384,-0.8297 0.37695,-0.37713 0.65871,-0.82551 0.863,-1.29452 0.40767,-0.93593 0.50721,-1.92811 0.57312,-2.85986 0.0658,-0.93038 0.10401,-1.82723 0.3336,-2.64033 0.11461,-0.40594 0.27633,-0.79018 0.49613,-1.1244 0.21912,-0.33314 0.50066,-0.61938 0.82309,-0.81549 0.45205,-0.27475 1.01844,-0.3873 1.56822,-0.3345 0.55284,0.0529 1.10134,0.26754 1.58439,0.58735 0.96982,0.64201 1.67095,1.6903 2.23639,2.81426 0.56702,1.12707 1.03104,2.36573 1.75071,3.52045 0.36009,0.57772 0.78537,1.13233 1.30686,1.60718 0.52239,0.47572 1.14069,0.86843 1.83626,1.09204 0.95263,0.30618 1.97996,0.27007 2.9131,-0.0258 0.93059,-0.2947 1.75627,-0.83733 2.43313,-1.50932 1.35091,-1.34109 2.07718,-3.12929 2.55669,-4.87954 0.47859,-1.74689 0.74447,-3.5022 1.28024,-5.13522 0.53407,-1.62791 1.38069,-3.1765 2.69165,-4.13822 1.23968,-0.9096 2.90492,-1.25053 4.40245,-0.90201 1.49749,0.34857 2.84114,1.39 3.5518,2.75343 0.68062,1.30586 0.97563,2.09044 0.97706,4.22946 a 0.97334966,0.97334966 0 0 0 -0.49519,0.79651 l -0.096,1.44085 c -1.48107,-0.12244 -2.60512,2.00548 -1.03028,3.06326 0.26142,0.18302 0.5256,0.35286 0.79077,0.51704 l -0.12451,1.86286 a 0.97334966,0.97334966 0 1 0 1.94175,0.13022 l 0.0665,-0.99131 c 5.31334,2.38063 11.01463,1.36445 14.8364,-1.69939 l 0,12.5658 c 4.9e-4,0.08 0.007,0.159 0.019,0.2376 -0.022,0.124 -0.034,0.2496 -0.0361,0.3755 l -0.14256,5.0439 c -0.0713,2.5222 -0.13606,3.4948 -0.40109,4.2001 -0.26504,0.7052 -0.95949,1.6816 -2.67074,3.9024 l -3.42255,4.4414 c -1.9647,2.5149 1.83541,5.4434 3.76661,2.9027 l 3.42254,-4.4414 c 1.71125,-2.2209 2.72883,-3.466 3.35506,-5.1324 0.62622,-1.6663 0.63207,-3.2156 0.70332,-5.7378 l 0.0466,-1.63 c 0.0707,-2.4958 2.92775,-2.4978 4.55642,-0.01 l 0.97231,1.4922 c 1.41702,2.1748 1.93543,3.063 2.09192,3.7162 0.15649,0.6532 0.0996,1.7103 -0.16918,4.3283 l -0.537,5.236 c -0.3975,3.2122 4.4657,3.7116 4.7294,0.4856 l 0.53795,-5.2359 c 0.26878,-2.618 0.48036,-4.178 0.0627,-5.9213 -0.41764,-1.7432 -1.31549,-3.0298 -2.73252,-5.2046 l -2.83422,-4.3492 c -0.0937,-0.1472 -0.20337,-0.2837 -0.32695,-0.4068 l 0,-12.67038 13.211137,-1.1006 c 2.17096,-0.12779 2.04604,-3.36546 -0.12831,-3.32561 l 0,0 c -0.0107,2e-4 -0.0216,0 -0.0323,0 -0.0387,0 -0.11596,0.008 -0.11596,0.008 l -14.308897,1.19184 -0.88201,0.0732 -6.14746,0.51232 c -0.007,0 -0.0119,0 -0.019,0 -2.58493,0.21577 -2.59229,0.2201 -4.57447,1.79536 -3.6e-4,-0.005 3.3e-4,-0.008 0,-0.0122 -3.07776,2.52919 -7.9942,3.4037 -12.58955,0.75563 l 0.15302,-2.28491 a 0.97334966,0.97334966 0 0 0 -0.47617,-0.91714 c -0.0127,-2.2668 -0.37542,-3.33003 -1.0835,-4.68855 -0.84727,-1.62552 -2.40988,-2.83591 -4.19525,-3.25144 -0.44634,-0.10389 -0.90157,-0.15727 -1.35723,-0.16161 z"/></g><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by Andrew Doane</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`
			//rawSVG : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 125" style="enable-background:new 0 0 100 100;" xml:space="preserve"><path d="M35.4,92.4c-0.4,0-0.9-0.1-1.3-0.2c-3.5-1.1-3.8-5.6-3.5-8.1L33.3,67l-9.9,11.8c-1.7,1.9-5.4,4.3-8.4,2.2  c-3-2.1-2-6.5-1-8.8l10-19.3c-2.5-4.5-3.8-9.6-3.8-14.7c0-16.4,12.9-29.8,28.9-29.8S78,21.7,78,38.1c0,5.1-1.3,10.1-3.7,14.5  l11.4,20.4c0,0,0,0,0,0c1.2,2.2,2.4,6.5-0.5,8.8c-2.9,2.3-6.6,0-8.4-1.7L65.3,67.1l3.3,16.2c0.5,2.5,0.3,7-3.1,8.3  c-3.4,1.3-6.3-2-7.5-4.2l-8.8-17.6l-7.9,17.7C40.4,89.5,38.2,92.4,35.4,92.4z M35.2,61.1c0.2,0,0.5,0.1,0.7,0.2  c0.5,0.3,0.9,1,0.8,1.6l-3.5,21.6c0,0-0.5,4.3,1.6,4.9c2.1,0.7,4-3.1,4-3.2l9.1-20.3c0.2-0.5,0.7-0.8,1.2-0.8c0.5,0,1,0.3,1.3,0.8  l10,20.2l0,0c0,0,2.1,3.7,4.2,2.9c2-0.8,1.3-5,1.3-5l-4.3-21c-0.1-0.6,0.1-1.2,0.7-1.5c0.6-0.3,1.4-0.3,1.9,0.2l14.6,16.7l0,0  c0,0,3.1,2.8,4.8,1.4c1.7-1.3-0.1-5-0.2-5.2L71.6,53.4c-0.3-0.4-0.2-1,0-1.4c2.4-4.2,3.7-9,3.7-13.8c0-14.9-11.7-26.9-26.1-26.9  c-14.4,0-26.1,12.1-26.1,26.9c0,4.9,1.3,9.7,3.8,14c0.3,0.4,0.3,1,0,1.4l-10.4,20l0,0c0,0-1.7,3.9,0.1,5.2c1.8,1.3,4.7-1.7,4.8-1.8  l12.8-15.3C34.4,61.3,34.8,61.1,35.2,61.1z M35.7,33.8c0.6-1.7,2.1-2.8,3.9-2.8c1.9,0,3.6,1.1,4.2,2.8c0.3,0.7,1.1,1.1,1.8,0.8  c0.7-0.3,1.1-1.1,0.8-1.8c-1-2.8-3.8-4.6-6.8-4.6c-2.9,0-5.5,1.9-6.5,4.6c-0.1,0.2-0.1,0.3-0.1,0.5c0,0.6,0.3,1.1,0.9,1.3  c0.2,0.1,0.3,0.1,0.5,0.1C35,34.8,35.5,34.4,35.7,33.8z M56.3,33.8c0.6-1.7,2.1-2.8,3.9-2.8c1.9,0,3.6,1.1,4.2,2.8  c0.3,0.7,1.1,1.1,1.8,0.8c0.7-0.3,1.1-1.1,0.8-1.8c-1-2.8-3.8-4.6-6.8-4.6c-2.9,0-5.5,1.9-6.5,4.6c-0.1,0.2-0.1,0.3-0.1,0.5  c0,0.6,0.3,1.1,0.9,1.3c0.2,0.1,0.3,0.1,0.5,0.1C55.6,34.8,56.1,34.4,56.3,33.8z M50.3,47.5c2.9,0,5.4-1.9,6.4-4.7  c0.1-0.2,0.1-0.3,0.1-0.5c0-0.6-0.4-1.1-0.9-1.3c-0.7-0.3-1.5,0.1-1.8,0.9c0,0.1,0,0.1-0.1,0.2c-0.6,1.5-2,2.5-3.6,2.6  c-0.1,0-0.1,0-0.2,0c-1.8,0-3.6-1.1-4.2-2.8c-0.3-0.7-1.1-1.1-1.8-0.8c-0.7,0.3-1,1.1-0.8,1.8C44.5,45.7,47.2,47.5,50.3,47.5  C50.2,47.5,50.3,47.5,50.3,47.5z"/><text x="0" y="115" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">Created by AfterGrind</text><text x="0" y="120" fill="#000000" font-size="5px" font-weight="bold" font-family="'Helvetica Neue', Helvetica, Arial-Unicode, Arial, Sans-serif">from the Noun Project</text></svg>`
		};
	},

	render: function(){
		return <div className='badges'>
			<NaturalCritIcon />

			<h1>D&D Achievement Badges</h1>
			<p>Want to give your players a little something extra? Create a custom achivement badge just for them!</p>
			<div className='content'>
				<Controls data={this.state} onChange={(newState)=>this.setState(newState)} />
				<BadgeRender {...this.state} />
			</div>
			<a className='credit' href='http://howlettstudios.com/dd-badges/' target='_blank'>
				Inspired by <br /> Howlett Studios's D&D badges
			</a>
		</div>
	}
});

module.exports = Badges;

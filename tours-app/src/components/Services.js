import Title from './Title';
import { Services } from '../data';

function services() {
	return (
		<section className="section services" id="services">
			<Title title="Our" subtitle="Services" />
			<div className="section-center services-center">
				{Services.map((link) => {
					const { id, icon, title, text } = link;
					return (
						<article className="service" key={id}>
							<span className="service-icon">
								<i className={icon}></i>
							</span>
							<div className="service-info">
								<h4 className="service-title">{title}</h4>
								<p className="service-text">{text}</p>
							</div>
						</article>
					);
				})}
			</div>
		</section>
	);
}

export default services;

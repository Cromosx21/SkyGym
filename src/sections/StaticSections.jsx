import React from "react";
import {
	Dumbbell,
	ShieldCheck,
	Trophy,
	Clock,
	ArrowRight,
	Users,
} from "lucide-react";
import { TestimonialCard } from "../components/Ui.jsx"; // Extensión .jsx agregada
import { transformationCases } from "../data/data.jsx"; // Extensión .js agregada
import { Coffee, Music, Lightbulb, Wifi } from "lucide-react";

// --- HERO SECTION ---
export const HeroSection = () => (
	<section
		id="inicio"
		className="relative h-screen flex items-center justify-center pt-20"
	>
		<div className="absolute inset-0 overflow-hidden">
			{/* Imagen de fondo con filtro oscuro y escala de grises para impacto */}
			<img
				src="./HomeBackground.jpg"
				className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
				alt="Fachada de SKY GYM Ayacucho"
				onError={(e) => {
					e.target.onerror = null;
					e.target.src = "./HomeBackground.jpg";
				}}
			/>
			{/* Degradado oscuro para asegurar la legibilidad del texto */}
			<div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent"></div>
		</div>

		<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
			<h2 className="text-[#FFD700] font-bold tracking-[0.5em] mb-4 text-lg animate-pulse">
				AYACUCHO • PERÚ
			</h2>
			<h1 className="text-7xl md:text-9xl font-black leading-none uppercase italic mb-6">
				ENTRENA CON <br /> <span className="text-outline">VISIÓN</span>
			</h1>
			<p className="max-w-xl text-gray-300 text-lg mb-8 pl-4 text-center mx-auto">
				Transforma tu cuerpo y mente en el centro de entrenamiento más
				exclusivo de la ciudad. Equipamiento Pro y coaches de élite.
			</p>
			<div className="flex gap-4 justify-center">
				{/* Botón CTA principal en color dorado */}
				<button
					type="button"
					onClick={() =>
						document
							.getElementById("planes")
							?.scrollIntoView({ behavior: "smooth" })
					}
					className="bg-[#FFD700] text-black px-8 py-4 font-black uppercase flex items-center gap-2 group transform hover:scale-105 transition cursor-pointer"
				>
					ÚNETE AHORA{" "}
					<ArrowRight
						size={20}
						className="group-hover:translate-x-2 transition-transform"
					/>
				</button>
			</div>
		</div>
	</section>
);

// --- PARTNERS SECTION ---
export const PartnersSection = () => (
	<section id="partners" className="py-8 bg-[#111] overflow-hidden">
		<div className="opacity-70">
			<div className="marquee flex gap-16 whitespace-nowrap px-6">
				<div className="text-3xl font-black italic text-gray-700 hover:text-[#FFD700] transition duration-500">
					POWER FIT
				</div>
				<div className="text-3xl font-bold text-gray-700 hover:text-[#FFD700] transition duration-500">
					AYACUCHO SPORT
				</div>
				<div className="text-3xl font-extrabold text-[#FFD700] italic">
					SUPRA NUTRITION
				</div>
				<div className="text-3xl font-medium text-gray-700 hover:text-[#FFD700] transition duration-500">
					PERÚ TRAINER
				</div>
				<div className="text-3xl font-black text-gray-700 hover:text-[#FFD700] transition duration-500">
					MÚSCULO VITAL
				</div>
				<div className="text-3xl font-black italic text-gray-700 hover:text-[#FFD700] transition duration-500">
					POWER FIT
				</div>
				<div className="text-3xl font-bold text-gray-700 hover:text-[#FFD700] transition duration-500">
					AYACUCHO SPORT
				</div>
				<div className="text-3xl font-extrabold text-[#FFD700] italic">
					SUPRA NUTRITION
				</div>
				<div className="text-3xl font-medium text-gray-700 hover:text-[#FFD700] transition duration-500">
					PERÚ TRAINER
				</div>
				<div className="text-3xl font-black text-gray-700 hover:text-[#FFD700] transition duration-500">
					MÚSCULO VITAL
				</div>
			</div>
		</div>
	</section>
);

// --- SERVICES SECTION (Bento Grid) ---
export const ServicesSection = () => (
	<section id="servicios" className="py-24 px-6 max-w-7xl mx-auto">
		<h3 className="text-4xl font-black mb-10 uppercase italic underline decoration-[#FFD700] decoration-4 underline-offset-8">
			Nuestros <span className="text-[#FFD700]">Servicios</span>
		</h3>
		<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			<div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-[#FFD700]/10 transition">
				<div className="flex items-center gap-3 mb-4">
					<Trophy className="text-[#FFD700]" size={28} />
					<h4 className="text-xl font-black uppercase">
						Entrenamiento Personal
					</h4>
				</div>
				<ul className="space-y-2 text-gray-300 text-sm">
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span> Plan
						a medida
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Seguimiento 1:1
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Objetivos claros
					</li>
				</ul>
			</div>
			<div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-[#FFD700]/10 transition">
				<div className="flex items-center gap-3 mb-4">
					<ShieldCheck className="text-[#FFD700]" size={28} />
					<h4 className="text-xl font-black uppercase">
						Asesoramiento Nutricional
					</h4>
				</div>
				<ul className="space-y-2 text-gray-300 text-sm">
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span> Plan
						personalizado
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Recetas prácticas
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Seguimiento mensual
					</li>
				</ul>
			</div>
			<div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-[#FFD700]/10 transition">
				<div className="flex items-center gap-3 mb-4">
					<Users className="text-[#FFD700]" size={28} />
					<h4 className="text-xl font-black uppercase">
						Clases Grupales
					</h4>
				</div>
				<ul className="space-y-2 text-gray-300 text-sm">
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span> HIIT
						y funcional
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span> Core
						y movilidad
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Comunidad y motivación
					</li>
				</ul>
			</div>
			<div className="bg-[#111] border border-white/10 rounded-xl p-6 hover:shadow-xl hover:shadow-[#FFD700]/10 transition">
				<div className="flex items-center gap-3 mb-4">
					<Dumbbell className="text-[#FFD700]" size={28} />
					<h4 className="text-xl font-black uppercase">
						Musculación & Peso Libre
					</h4>
				</div>
				<ul className="space-y-2 text-gray-300 text-sm">
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span> Zona
						ampliada
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Equipos premium
					</li>
					<li className="flex items-center gap-2">
						<span className="text-[#FFD700] font-bold">•</span>{" "}
						Progresión de fuerza
					</li>
				</ul>
			</div>
		</div>
	</section>
);

// --- ENVIRONMENTS SECTION ---
export const EnvironmentsSection = () => (
	<section id="ambientes" className="py-24 px-0 bg-black">
		<div className="max-w-7xl mx-auto px-6">
			<h3 className="text-4xl font-black mb-6 uppercase italic underline decoration-[#FFD700] decoration-4 underline-offset-8">
				Conoce Nuestros{" "}
				<span className="text-[#FFD700]">Ambientes</span>
			</h3>
			<div className="flex flex-wrap gap-3 mb-10">
				<span className="px-3 py-1 text-xs rounded border border-white/10 bg-white/5 text-gray-300">
					Cochera
				</span>
				<span className="px-3 py-1 text-xs rounded border border-white/10 bg-white/5 text-gray-300">
					Casilleros
				</span>
			</div>
		</div>
		<div className="w-full">
			{/* Modelo de mini secciones para los ambientes */}
			<div className=" items-center bg-[url(https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
				<div className="bg-linear-to-r from-black from-25% to-black/0 py-16 w-full">
					<div className="max-w-7xl mx-auto px-6">
						<h4 className="text-3xl font-black uppercase mb-4">
							Zona Tren Superior
						</h4>
						<ul className=" text-gray-300 text-base space-y-2">
							<li className="flex items-center gap-2">
								<Dumbbell
									size={16}
									className="text-[#FFD700]"
								/>
								Maquinarias para pecho y espalda
							</li>
							<li className="flex items-center gap-2">
								<Dumbbell
									size={16}
									className="text-[#FFD700]"
								/>
								Hombros y brazos
							</li>
							<li className="flex items-center gap-2">
								<Lightbulb
									size={16}
									className="text-[#FFD700]"
								/>
								Área amplia y ventilada
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className=" items-center bg-[url(https://images.unsplash.com/photo-1584863231364-2edc166de576?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
					<div className="bg-linear-to-l from-black from-25% to-black/0 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="max-w-7xl mx-auto px-6 col-start-2">
							<h4 className="text-3xl font-black uppercase mb-4">
								Zona Tren Inferior
							</h4>
							<ul className=" text-gray-300 text-base space-y-2">
								<li className="flex items-center gap-2">
									<Dumbbell
										size={16}
										className="text-[#FFD700]"
									/>
									Prensas y sentadillas
								</li>
								<li className="flex items-center gap-2">
									<Dumbbell
										size={16}
										className="text-[#FFD700]"
									/>
									Femorales y glúteos
								</li>
								<li className="flex items-center gap-2">
									<Lightbulb
										size={16}
										className="text-[#FFD700]"
									/>
									Espacios para trabajo funcional
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className=" items-center bg-[url(https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
					<div className="bg-linear-to-r from-black from-25% to-black/0 py-16 w-full">
						<div className="max-w-7xl mx-auto px-6">
							<h4 className="text-3xl font-black uppercase mb-4">
								Zona de Zumba
							</h4>
							<ul className=" text-gray-300 text-base space-y-2">
								<li className="flex items-center gap-2">
									<Lightbulb
										size={16}
										className="text-[#FFD700]"
									/>
									Estudio amplio
								</li>
								<li className="flex items-center gap-2">
									<Music
										size={16}
										className="text-[#FFD700]"
									/>
									Sonido e iluminación
								</li>
								<li className="flex items-center gap-2">
									<Clock
										size={16}
										className="text-[#FFD700]"
									/>
									Clases dinámicas
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full">
				<div className="items-center bg-[url(https://images.unsplash.com/photo-1568485085630-337cf2d871ca?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-no-repeat bg-center">
					<div className="bg-linear-to-l from-black from-25% to-black/0 py-16 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="max-w-7xl mx-auto px-6 col-start-2">
							<h4 className="text-3xl font-black uppercase mb-4">
								Cafetería & Lounge
							</h4>
							<ul className="space-y-2 text-gray-300 text-base">
								<li className="flex items-center gap-2">
									<Coffee
										size={16}
										className="text-[#FFD700]"
									/>
									Café y snacks saludables
								</li>
								<li className="flex items-center gap-2">
									<ShieldCheck
										size={16}
										className="text-[#FFD700]"
									/>
									Zona de descanso
								</li>
								<li className="flex items-center gap-2">
									<Wifi
										size={16}
										className="text-[#FFD700]"
									/>
									Wi‑Fi y enchufes
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
);

// --- TESTIMONIALS SECTION ---
export const TestimonialsSection = () => (
	<section id="testimonios" className="py-24 px-0 bg-black">
		<div className="max-w-7xl mx-auto px-6">
			<h3 className="text-4xl font-black mb-4 uppercase italic text-center">
				Casos Reales de{" "}
				<span className="text-[#FFD700]">Transformación</span>
			</h3>
			<p className="text-gray-400 mb-12 text-lg text-center">
				La evidencia está en los resultados. Conoce las historias de
				éxito de nuestra comunidad en Ayacucho.
			</p>
		</div>
		<div className="relative w-full">
			<div className="carousel overflow-hidden">
				<div className="carousel-track flex gap-6 px-6">
					{[...transformationCases, ...transformationCases].map(
						(data, index) => (
							<div
								key={index}
								className="slide-item shrink-0 md:w-[420px]"
							>
								<TestimonialCard data={data} />
							</div>
						)
					)}
				</div>
			</div>
			<div className="carousel-edge-left"></div>
			<div className="carousel-edge-right"></div>
		</div>
		<div className="mt-12 flex justify-center">
			<button className="bg-transparent text-[#FFD700] border border-[#FFD700] px-8 py-3 font-bold uppercase hover:bg-[#FFD700] hover:text-black transition rounded-md">
				Ver Más Historias
			</button>
		</div>
	</section>
);

// --- PRICING SECTION ---
export const PricingSection = () => (
	<section id="planes" className="py-20 px-6 bg-[#111] text-white">
		<div className="max-w-7xl mx-auto text-center">
			<h2 className="text-5xl font-black uppercase mb-14">
				ELIGE TU <span className="text-[#FFD700]">CAMINO</span>
			</h2>
			<div className="grid md:grid-cols-3 gap-8">
				{/* Tarjeta Básica */}
				<div className="border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-[#FFD700]/30 transition-all duration-300">
					<h4 className="text-2xl font-bold uppercase italic mb-4">
						Plan INICIO
					</h4>
					<p className="text-4xl font-black mb-6 border-b border-white/10 pb-4">
						S/ 79<span className="text-lg font-normal">/mes</span>
					</p>
					<ul className="text-left mb-8 space-y-3 font-light text-gray-300">
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Acceso Ilimitado
						</li>
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Área de Máquinas
						</li>
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Evaluación Inicial
						</li>
						<li className="line-through opacity-50">
							Clases Grupales
						</li>
						<li className="line-through opacity-50">
							Acceso a Sedes
						</li>
					</ul>
					<button className="w-full py-3 border-2 border-[#FFD700] text-[#FFD700] font-bold uppercase hover:bg-[#FFD700] hover:text-black transition rounded-md">
						Contratar
					</button>
				</div>

				{/* Tarjeta Premium - Destacada (Dorado) */}
				<div className="bg-[#FFD700] text-black p-10 rounded-xl shadow-2xl scale-[1.05] relative transform border-4 border-yellow-300">
					<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-600 text-white px-3 py-1 text-xs font-black uppercase rounded-full tracking-wider">
						Más Popular
					</div>
					<h4 className="text-2xl font-black uppercase italic mb-4">
						Plan ORO ELITE
					</h4>
					<p className="text-5xl font-black mb-6 border-b border-black/10 pb-4">
						S/ 130<span className="text-xl font-normal">/mes</span>
					</p>
					<ul className="text-left mb-8 space-y-3 font-medium">
						<li>
							<span className="text-black font-black">✓</span>{" "}
							Acceso Total Ilimitado
						</li>
						<li>
							<span className="text-black font-black">✓</span>{" "}
							Clases Grupales (TODO)
						</li>
						<li>
							<span className="text-black font-black">✓</span>{" "}
							Invitado Gratis (2/mes)
						</li>
						<li>
							<span className="text-black font-black">✓</span>{" "}
							Acceso a Sedes (Futuras)
						</li>
						<li>
							<span className="text-black font-black">✓</span>{" "}
							Plan Nutricional Básico
						</li>
					</ul>
					<button className="w-full py-3 bg-black text-[#FFD700] font-black uppercase hover:bg-gray-800 transition rounded-md">
						¡COMENZAR HOY!
					</button>
				</div>

				{/* Tarjeta Anual */}
				<div className="border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-[#FFD700]/30 transition-all duration-300">
					<h4 className="text-2xl font-bold uppercase italic mb-4">
						Plan ANUAL
					</h4>
					<p className="text-4xl font-black mb-6 border-b border-white/10 pb-4">
						S/ 1199<span className="text-lg font-normal">/año</span>
					</p>
					<ul className="text-left mb-8 space-y-3 font-light text-gray-300">
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Ahorro de S/ 361
						</li>
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Todos los beneficios ORO
						</li>
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							1 mes de congelamiento
						</li>
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Acceso a Sedes
						</li>
						<li>
							<span className="text-[#FFD700] font-bold">✓</span>{" "}
							Regalo Exclusivo
						</li>
					</ul>
					<button className="w-full py-3 border-2 border-[#FFD700] text-[#FFD700] font-bold uppercase hover:bg-[#FFD700] hover:text-black transition rounded-md">
						Aprovechar
					</button>
				</div>
			</div>
		</div>
	</section>
);

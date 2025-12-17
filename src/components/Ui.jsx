import React, { useState, useRef } from "react";
import {
	Heart,
	Dumbbell,
	ShieldCheck,
	Trophy,
	Clock,
	ArrowRight,
	Instagram,
	Facebook,
	MapPin,
	Mail,
	Phone,
	Menu,
	X,
} from "lucide-react";

// Componente de Tarjeta de Testimonio
export const TestimonialCard = ({ data }) => (
	<div className="bg-[#1a1a1a] p-6 rounded-xl shadow-2xl flex flex-col items-center border border-white/10 hover:border-[#FFD700] transition-all duration-300">
		<div className="grid grid-cols-2 gap-4 w-full mb-6">
			<div className="relative">
				<img
					src={data.beforeImg}
					alt={`Antes de ${data.name}`}
					className="w-full md:h-[256px] h-auto rounded-lg object-cover grayscale opacity-90"
				/>
				<span className="absolute bottom-0 left-0 bg-black/70 text-white text-xs px-2 py-1 font-bold rounded-tr-lg">
					ANTES
				</span>
			</div>
			<div className="relative">
				<img
					src={data.afterImg}
					alt={`Después de ${data.name}`}
					className="w-full md:h-[256px] h-auto rounded-lg object-cover"
				/>
				<span className="absolute bottom-0 right-0 bg-[#FFD700] text-black text-xs px-2 py-1 font-black rounded-tl-lg">
					DESPUÉS
				</span>
			</div>
		</div>

		<p className="text-sm font-semibold text-[#FFD700] uppercase mb-2 flex items-center gap-1">
			<Heart size={16} /> {data.focus}
		</p>
		<p className="italic text-center text-gray-300 mb-4">"{data.quote}"</p>
		<div className="text-center border-t border-white/10 pt-4 w-full">
			<h5 className="text-xl font-black uppercase text-white">
				{data.name}
			</h5>
			<p className="text-sm text-gray-500">
				Transformación en:{" "}
				<span className="text-[#FFD700] font-bold">
					{data.duration}
				</span>
			</p>
		</div>
	</div>
);

// Componente de Barra de Navegación
export const Navbar = () => {
	const [showPass, setShowPass] = useState(false);
	const [unlocked, setUnlocked] = useState(false);
	const [holding, setHolding] = useState(false);
	const [progress, setProgress] = useState(0);
	const [selectedDays, setSelectedDays] = useState(null);
	const [code, setCode] = useState("");
	const [mobileOpen, setMobileOpen] = useState(false);
	const holdRef = useRef(null);

	const startHold = () => {
		if (unlocked) return;
		setHolding(true);
		setProgress(0);
		let elapsed = 0;
		holdRef.current = setInterval(() => {
			elapsed += 100;
			const p = Math.min(100, Math.floor((elapsed / 3000) * 100));
			setProgress(p);
			if (p >= 100) {
				clearInterval(holdRef.current);
				setHolding(false);
				setUnlocked(true);
			}
		}, 100);
	};

	const stopHold = () => {
		if (holdRef.current) {
			clearInterval(holdRef.current);
			holdRef.current = null;
		}
		setHolding(false);
		if (!unlocked) setProgress(0);
	};

	const generateCode = () => {
		if (!selectedDays || !unlocked) return;
		const r = Math.random().toString(36).slice(2, 8).toUpperCase();
		setCode(`SKY-${selectedDays === 1 ? "DAY1" : "DAY3"}-${r}`);
	};

	return (
		<>
			<nav className="fixed w-full z-50 bg-black/80 backdrop-blur-md border-b border-yellow-900/30 px-6 py-4 flex justify-between items-center">
				<div className="text-3xl font-black tracking-tighter italic">
					SKY<span className="text-[#FFD700]">GYM</span>
				</div>
				<div className="hidden md:flex gap-8 text-sm uppercase font-bold tracking-widest">
					<a
						href="#inicio"
						className="text-[#FFD700] hover:text-yellow-400 transition"
					>
						Inicio
					</a>
					<a
						href="#servicios"
						className="hover:text-[#FFD700] transition"
					>
						Servicios
					</a>
					<a
						href="#ambientes"
						className="hover:text-[#FFD700] transition"
					>
						Ambientes
					</a>
					<a
						href="#testimonios"
						className="hover:text-[#FFD700] transition"
					>
						Testimonios
					</a>
					<a
						href="#planes"
						className="hover:text-[#FFD700] transition"
					>
						Planes
					</a>
					<a
						href="#contacto"
						className="hover:text-[#FFD700] transition"
					>
						Contacto
					</a>
				</div>
				<div className="flex items-center gap-2">
					<button
						onClick={() => {
							setShowPass(true);
							setUnlocked(false);
							setProgress(0);
							setSelectedDays(null);
							setCode("");
						}}
						className="bg-[#FFD700] text-black px-5 py-2 rounded-sm font-black text-xs uppercase hover:bg-yellow-500 transition-all cursor-pointer"
					>
						Pase Gratis
					</button>
					<button
						onClick={() => setMobileOpen((v) => !v)}
						className="md:hidden p-2 rounded-sm border border-white/10 text-white hover:text-[#FFD700] hover:border-[#FFD700] transition"
						aria-label="Abrir menú"
					>
						{mobileOpen ? <X size={20} /> : <Menu size={20} />}
					</button>
				</div>
			</nav>
			{mobileOpen && (
				<div className="fixed top-[64px] left-0 right-0 z-40 md:hidden bg-black/90 border-t border-white/10">
					<div className="px-6 py-4 grid gap-3 text-sm uppercase font-bold tracking-widest">
						<a
							href="#inicio"
							onClick={() => setMobileOpen(false)}
							className="py-2 hover:text-[#FFD700]"
						>
							Inicio
						</a>
						<a
							href="#servicios"
							onClick={() => setMobileOpen(false)}
							className="py-2 hover:text-[#FFD700]"
						>
							Servicios
						</a>
						<a
							href="#ambientes"
							onClick={() => setMobileOpen(false)}
							className="py-2 hover:text-[#FFD700]"
						>
							Ambientes
						</a>
						<a
							href="#testimonios"
							onClick={() => setMobileOpen(false)}
							className="py-2 hover:text-[#FFD700]"
						>
							Testimonios
						</a>
						<a
							href="#planes"
							onClick={() => setMobileOpen(false)}
							className="py-2 hover:text-[#FFD700]"
						>
							Planes
						</a>
						<a
							href="#contacto"
							onClick={() => setMobileOpen(false)}
							className="py-2 hover:text-[#FFD700]"
						>
							Contacto
						</a>
					</div>
				</div>
			)}
			{showPass && (
				<div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
					<div className="bg-[#0b0b0b] border border-white/10 rounded-xl w-full max-w-md p-6">
						<div className="flex justify-between items-center mb-4">
							<h4 className="text-xl font-black uppercase">
								Pase Gratis
							</h4>
							<button
								onClick={() => setShowPass(false)}
								className="text-gray-400 hover:text-white"
							>
								✕
							</button>
						</div>
						<p className="text-gray-400 text-sm mb-4">
							Completa el reto para desbloquear tu pase gratis de
							1 o 3 días.
						</p>
						<div className="mb-4">
							<button
								onMouseDown={startHold}
								onMouseUp={stopHold}
								onMouseLeave={stopHold}
								disabled={unlocked}
								className={`w-full px-4 py-3 rounded-md font-black uppercase ${
									unlocked
										? "bg-green-600 text-white"
										: "bg-[#FFD700] text-black hover:bg-yellow-500"
								}`}
							>
								{unlocked
									? "Reto completado"
									: holding
									? "Mantén presionado..."
									: "Mantén presionado 3s"}
							</button>
							<div className="mt-2 h-2 bg-white/10 rounded">
								<div
									style={{ width: `${progress}%` }}
									className="h-2 bg-[#FFD700] rounded"
								></div>
							</div>
						</div>
						<div className="grid grid-cols-2 gap-3 mb-4">
							<button
								onClick={() => setSelectedDays(1)}
								className={`px-4 py-2 rounded-md border ${
									selectedDays === 1
										? "border-[#FFD700] text-[#FFD700]"
										: "border-white/10 text-white"
								}`}
							>
								1 día
							</button>
							<button
								onClick={() => setSelectedDays(3)}
								className={`px-4 py-2 rounded-md border ${
									selectedDays === 3
										? "border-[#FFD700] text-[#FFD700]"
										: "border-white/10 text-white"
								}`}
							>
								3 días
							</button>
						</div>
						<button
							onClick={generateCode}
							disabled={!unlocked || !selectedDays}
							className="w-full px-4 py-3 rounded-md bg-black text-[#FFD700] border border-[#FFD700] font-black uppercase disabled:opacity-50"
						>
							Generar Pase
						</button>
						{code && (
							<div className="mt-4 p-4 border border-[#FFD700] rounded-md bg-black">
								<div className="text-sm text-gray-400 mb-1">
									Código de Pase
								</div>
								<div className="text-2xl font-black text-[#FFD700] tracking-widest">
									{code}
								</div>
								<div className="text-xs text-gray-500 mt-2">
									Muestra este código en recepción para
									activar tu pase.
								</div>
							</div>
						)}
					</div>
				</div>
			)}
		</>
	);
};

// Componente de Pie de Página
export const Footer = () => (
	<footer className="bg-black border-t border-yellow-900/50 py-8 px-6">
		<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
			<div className="text-gray-500 text-sm">
				© 2024 SKY GYM Ayacucho. Todos los derechos reservados.
			</div>
			<div className="flex gap-4">
				<a href="#">
					<Instagram
						size={24}
						className="hover:text-[#FFD700] cursor-pointer"
					/>
				</a>
				<a href="#">
					<Facebook
						size={24}
						className="hover:text-[#FFD700] cursor-pointer"
					/>
				</a>
			</div>
		</div>
	</footer>
);

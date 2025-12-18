import React, { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";
import { planesDetails } from "../data/data.jsx"; // Extensión .js agregada

// Componente para la sección de Contacto (contiene la lógica de la IA)
export const ContactSection = () => {
	// Estado para la funcionalidad de IA
	const [goal, setGoal] = useState("");
	const [recommendation, setRecommendation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * Llama a la API de Gemini para obtener una recomendación de plan basada en el objetivo del usuario.
	 */
	const handleGoalRecommendation = async () => {
		if (!goal.trim()) {
			setError("Por favor, describe tu objetivo fitness.");
			return;
		}
		setIsLoading(true);
		setRecommendation(null);
		setError(null);

		const userQuery = `Mi objetivo es: "${goal}". Considerando los planes del gimnasio (${planesDetails}), ¿Cuál me recomiendas y por qué? Dame una respuesta concisa de máximo 4 oraciones.`;

		// Instrucción del sistema para el rol del modelo
		const systemPrompt =
			"Actúa como un Asesor Fitness experto y altamente motivador del gimnasio SKY GYM. Analiza el objetivo del usuario y recomienda el plan más adecuado (INICIO, ORO ELITE o ANUAL) y un breve mensaje motivacional. Responde completamente en español y de forma persuasiva.";

		// La clave API y la URL del modelo
		const apiKey = "AIzaSyAZ5z_DZKK163qg3rWzEDi0ExfhXPddZPI";
		const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

		const payload = {
			contents: [{ parts: [{ text: userQuery }] }],
			systemInstruction: {
				parts: [{ text: systemPrompt }],
			},
		};

		let response;
		try {
			if (!apiKey) {
				throw new Error("API key de Gemini no configurada.");
			}
			let maxRetries = 3;
			for (let attempt = 0; attempt < maxRetries; attempt++) {
				response = await fetch(apiUrl, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify(payload),
				});

				if (response.ok) {
					break; // Éxito
				}

				if (attempt < maxRetries - 1) {
					// Implementación de retroceso exponencial (Exponential backoff)
					const delay =
						Math.pow(2, attempt) * 1000 + Math.random() * 1000;
					await new Promise((resolve) => setTimeout(resolve, delay));
				} else {
					throw new Error("Máximo número de reintentos alcanzado.");
				}
			}

			const result = await response.json();
			// Asegurarse de que el texto no esté vacío y capturarlo
			const text =
				result.candidates?.[0]?.content?.parts?.[0]?.text ||
				"Error al generar la recomendación.";
			setRecommendation(text);
		} catch (e) {
			console.error("Gemini API Error:", e);
			setError(
				"Lo siento, la asesoría con IA no está disponible. Configura la API key de Gemini y vuelve a intentarlo."
			);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<section id="contacto" className="py-24 px-6 bg-[#0a0a0a]">
			<div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
				{/* Lado de Información */}
				<div className="p-6 md:p-12 border-2 border-[#FFD700] rounded-xl">
					<h3 className="text-4xl font-black mb-6 uppercase italic">
						Contáctanos y Soporte
					</h3>
					<p className="text-gray-300 mb-8">
						¿Tienes preguntas? Nuestro equipo de soporte en Ayacucho
						está listo para ayudarte en tu camino al éxito.
					</p>
					<div className="space-y-4">
						<div className="flex items-center gap-4 text-lg">
							<MapPin size={24} className="text-[#FFD700]" />
							<span className="text-gray-300">
								Av. Ramon castilla 198, Ayacucho
							</span>
						</div>
						<div className="flex items-center gap-4 text-lg">
							<Mail size={24} className="text-[#FFD700]" />
							<a
								href="mailto:info@skygym.pe"
								className="text-gray-300 hover:text-[#FFD700] transition"
							>
								info@skygym.pe
							</a>
						</div>
						<div className="flex items-center gap-4 text-lg">
							<Phone size={24} className="text-[#FFD700]" />
							<a
								href="tel:+51987654321"
								className="text-gray-300 hover:text-[#FFD700] transition"
							>
								+51 987 654 321
							</a>
						</div>
					</div>
					<div className="mt-6">
						<div className="text-sm text-gray-400 mb-2">
							Ubicación del Local
						</div>
						<div className="rounded-xl overflow-hidden border border-white/10">
							<iframe
								title="Mapa Ubicación SKY GYM Ayacucho"
								src="https://www.google.com/maps?q=Av.+Ramon+Castilla+198,+Ayacucho&output=embed"
								width="100%"
								height="280"
								style={{ border: 0 }}
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>

				{/* Lado del Formulario - Asesoría de IA */}
				<div className="bg-[#111] p-6 md:p-12 rounded-xl">
					<h4 className="text-2xl font-bold uppercase mb-6 flex items-center gap-2">
						Asesoría de Plan con IA ✨
					</h4>
					<p className="text-gray-400 mb-6 text-sm">
						Describe tu objetivo fitness (Ej: perder 10kg, aumentar
						fuerza) y nuestro Asesor Gemini te recomendará el plan
						ideal.
					</p>

					<div className="space-y-4">
						{/* Input para el objetivo */}
						<textarea
							placeholder="Describe tu objetivo fitness..."
							rows="3"
							value={goal}
							onChange={(e) => {
								setGoal(e.target.value);
								setError(null);
								setRecommendation(null);
							}}
							className="w-full p-3 bg-black border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-[#FFD700] focus:ring-[#FFD700]"
						></textarea>

						{/* Botón de la IA */}
						<button
							onClick={handleGoalRecommendation}
							disabled={isLoading}
							className="w-full bg-[#FFD700] text-black px-6 py-3 font-black uppercase hover:bg-yellow-500 transition rounded-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
						>
							{isLoading ? (
								<>
									Generando...
									<svg
										className="animate-spin h-5 w-5 text-black"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
									>
										<circle
											className="opacity-25"
											cx="12"
											cy="12"
											r="10"
											stroke="currentColor"
											strokeWidth="4"
										></circle>
										<path
											className="opacity-75"
											fill="currentColor"
											d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
										></path>
									</svg>
								</>
							) : (
								<>Recomendación Personalizada ✨</>
							)}
						</button>

						{/* Resultado de la IA */}
						{recommendation && (
							<div className="mt-4 p-4 bg-black border border-[#FFD700] rounded-md">
								<p className="font-bold text-[#FFD700] mb-2">
									Recomendación de Gemini:
								</p>
								<p className="text-gray-200 whitespace-pre-line">
									{recommendation}
								</p>
							</div>
						)}

						{/* Mensaje de Error */}
						{error && (
							<div className="mt-4 p-3 bg-red-900/50 border border-red-700 rounded-md text-red-300">
								{error}
							</div>
						)}

						<div className="border-t border-white/10 pt-4 mt-4">
							<h4 className="text-xl font-bold uppercase mb-4">
								O Envíanos un Mensaje Directo
							</h4>
							{/* Formulario de contacto original (simplificado) */}
							<form className="space-y-4">
								<input
									type="text"
									placeholder="Nombre completo"
									className="w-full p-3 bg-black border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-[#FFD700] focus:ring-[#FFD700]"
								/>
								<input
									type="email"
									placeholder="Correo Electrónico"
									className="w-full p-3 bg-black border border-white/10 rounded-md text-white placeholder-gray-500 focus:border-[#FFD700] focus:ring-[#FFD700]"
								/>
								<button
									type="submit"
									className="w-full bg-gray-700 text-white px-6 py-3 font-black uppercase hover:bg-gray-600 transition rounded-md"
								>
									Enviar
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

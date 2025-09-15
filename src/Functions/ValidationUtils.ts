// validationUtils.ts
export const isEmailValid = (email: string): boolean => {
  const minLength = 5;
  const maxLength = 50;

  if (!email) return false; // campo vazio
  if (email.length < minLength || email.length > maxLength) return false;

  // verificação básica de formato
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return false;

  return true;
};

export const isPasswordValid = (password: string): boolean => {
  const minLength = 6;
  const maxLength = 20;
  if (!password) return false; // campo vazio
  if (password.includes(" ")) return false; // não pode ter espaço
  if (password.length < minLength || password.length > maxLength) return false;
  return true;
};

// Função que checa se o login pode ser habilitado
export const canLogin = (email: string, password: string): boolean => {
  return isEmailValid(email) && isPasswordValid(password);
};




// --- Funções novas para registro --- //

/**
 * Verifica se o nome é válido
 * - Campo não vazio
 * - Pelo menos 2 palavras
 */
export const isNameValid = (name: string): boolean => {
  if (!name) return false; // campo vazio
  const words = name.trim().split(/\s+/);
  return words.length >= 2; // pelo menos 2 palavras
};

/**
 * Checa se todos os campos do registro estão válidos
 */
export const canRegister = (name: string, email: string, password: string): boolean => {
  return isNameValid(name) && isEmailValid(email) && isPasswordValid(password);
};



// --- Funções adicionais para registro --- //

/**
 * Verifica se o telefone é válido
 * - Campo não vazio
 * - Apenas números
 * - Pelo menos 8 dígitos (ajustável conforme sua necessidade)
 */
export const isTelephoneValid = (telephone: string): boolean => {
  if (!telephone) return false; // campo vazio
  const cleaned = telephone.replace(/\D/g, ''); // remove tudo que não é número
  return cleaned.length >= 8; // mínimo de dígitos
};

/**
 * Verifica se a cidade é válida
 * - Campo não vazio
 * - Pelo menos 2 caracteres
 */
export const isCityValid = (city: string): boolean => {
  if (!city) return false; // campo vazio
  return city.trim().length >= 2;
};
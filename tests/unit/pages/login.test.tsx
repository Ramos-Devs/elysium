import LoginPage from '@/app/login/page';
import { render, screen } from '@testing-library/react';

jest.mock('@/components/Logo', () => ({
  LogoDEV: () => <div data-testid="logoDEV">LogoDEV</div>,
}));

describe('LoginPage', () => {
  beforeEach(() => {
    render(<LoginPage />);
  });

  it('should render the DEV logo', () => {
    expect(screen.getByTestId('logoDEV')).toBeInTheDocument();
  });

  it('should display the main header', () => {
    expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
  });

  it('should display a login form.', () => {
    expect(screen.getByLabelText('Usuario')).toBeInTheDocument();
    expect(screen.getByLabelText('Contraseña')).toBeInTheDocument();
  });

  it('It should display a continue button', () => {
    const button = screen.getByRole('button', { name: /continuar/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/continuar/i);
  });

  it('should display a terms and conditions text', () => {
    expect(screen.getByText(/términos y condiciones/i)).toBeInTheDocument();
  });
});

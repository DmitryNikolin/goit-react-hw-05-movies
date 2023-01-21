import Container from 'components/Container/Container';
import Navigation from 'components/Navigation/Navigation';

import s from './AppBar.module.css';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Container>
        <Navigation />
      </Container>
    </header>
  );
}

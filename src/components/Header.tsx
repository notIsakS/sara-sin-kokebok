interface HeaderProps {
  title: string;
  introduction: string;
}

function Header({ title, introduction }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <h1>{title}</h1>
        <p>{introduction}</p>
      </div>
    </header>
  );
}

export default Header;

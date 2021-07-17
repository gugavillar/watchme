import { Button } from '../components/Button';

interface SideBarProps {
  selectedGenreId: number;
  genres: Array<{
    id: number;
    name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
    title: string;
  }>,
  clickFunction: (id: number) => void;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  function handleClick(id: number) {
    props.clickFunction(id);
  }
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {props.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClick(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
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

export function SideBar({ genres, selectedGenreId, clickFunction }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => clickFunction(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}
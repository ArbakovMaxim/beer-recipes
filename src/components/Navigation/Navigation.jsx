import {
  NavigationContainer,
  NavigationItem,
  NavigationLink,
  NavigationList,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationList>
        <NavigationItem>
          <NavigationLink to="/">Конвертер цветов</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/colorHtml">Цвета HTML</NavigationLink>
        </NavigationItem>
        <NavigationItem>
          <NavigationLink to="/colorWebSafe">Цвета web-safe</NavigationLink>
        </NavigationItem>
      </NavigationList>
    </NavigationContainer>
  );
};

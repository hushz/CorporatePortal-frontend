import { Contacts } from '../components/Contacts';
import { MainLayout } from '../layouts/MainLayout';

export default function Follows() {
  return (
    <MainLayout>
      <h1>Контакты</h1>
      <Contacts />
    </MainLayout>
  );
}
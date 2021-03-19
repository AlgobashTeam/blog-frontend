import { useRouter } from 'next/router';
import Web from '../../layouts/Web';

export default function NewsDetail() {
  const r = useRouter();
  const { categorySlug } = r.query;

  return (
    <Web>
      <p>{categorySlug}</p>
    </Web>
  );
}

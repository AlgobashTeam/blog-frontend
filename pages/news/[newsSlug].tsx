import Web from '../../layouts/Web';
import Navbar from '../../components/Navbar';
import Card from '../../components/Card';
import NewsInner from '../../components/NewsInner';

export default function NewsDetail() {
  const description = `
    👋 Welcome fellow
    <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.tailwindcss.com">Tailwind CSS</a>
    {' '}
    and
    {' '}
    <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://www.ghost.org">Ghost</a>
    {' '}
    fan.  This starter template is an attempt to replicate the default Ghost theme
    {' '}
    <a className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500" href="https://demo.ghost.io/welcome">"Casper"</a>
    {' '}
    using Tailwind CSS and vanilla Javascript.
  `;

  const body = `
    <p className="py-6">The basic blog page layout is available and all using the default Tailwind CSS classes (although there are a few hardcoded style tags). If you are going to use this in your project, you will want to convert the classes into components.</p>
    <p className="py-6">Sed dignissim lectus ut tincidunt vulputate. Fusce tincidunt lacus purus, in mattis tortor sollicitudin pretium. Phasellus at diam posuere, scelerisque nisl sit amet, tincidunt urna. Cras nisi diam, pulvinar ut molestie eget, eleifend ac magna. Sed at lorem condimentum, dignissim lorem eu, blandit massa. Phasellus eleifend turpis vel erat bibendum scelerisque. Maecenas id risus dictum, rhoncus odio vitae, maximus purus. Etiam efficitur dolor in dolor molestie ornare. Aenean pulvinar diam nec neque tincidunt, vitae molestie quam fermentum. Donec ac pretium diam. Suspendisse sed odio risus. Nunc nec luctus nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis nec nulla eget sem dictum elementum.</p>
    <ol>
      <li className="py-3">Maecenas accumsan lacus sit amet elementum porta. Aliquam eu libero lectus. Fusce vehicula dictum mi. In non dolor at sem ullamcorper venenatis ut sed dui. Ut ut est quam. Suspendisse quam quam, commodo sit amet placerat in, interdum a ipsum. Morbi sit amet tellus scelerisque tortor semper posuere.</li>
      <li className="py-3">Morbi varius posuere blandit. Praesent gravida bibendum neque eget commodo. Duis auctor ornare mauris, eu accumsan odio viverra in. Proin sagittis maximus pharetra. Nullam lorem mauris, faucibus ut odio tempus, ultrices aliquet ex. Nam id quam eget ipsum luctus hendrerit. Ut eros magna, eleifend ac ornare vulputate, pretium nec felis.</li>
      <li className="py-3">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vitae pretium elit. Cras leo mauris, tristique in risus ac, tristique rutrum velit. Mauris accumsan tempor felis vitae gravida. Cras egestas convallis malesuada. Etiam ac ante id tortor vulputate pretium. Maecenas vel sapien suscipit, elementum odio et, consequat tellus.</li>
    </ol>
    <blockquote className="border-l-4 border-green-500 italic my-8 pl-8 md:pl-12">Example of blockquote - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</blockquote>
    <p className="py-6">Example code block:</p>
    <pre className="bg-gray-900 rounded text-white font-mono text-base p-4">
      <code className="break-words whitespace-pre-wrap">
        {'\n'}
        &lt;header class="site-header outer"&gt;
        {'\n'}
        {'  '}
        &lt;div class="inner"&gt;
        {'\n'}
        {'    '}
        {'{'}
        {'{'}
        &gt; "site-nav"
        {'}'}
        {'}'}
        {'\n'}
        {'  '}
        &lt;/div&gt;
        {'\n'}
        &lt;/header&gt;
        {'\n'}
        {'\t'}
        {'\t'}
        {'\t'}
        {'\t'}
        {'\t'}
      </code>
      {'\n'}
      {'\t'}
      {'\t'}
      {'\t'}
      {'\t'}
    </pre>
  `;

  return (
    <Web>
      <Navbar />
      <NewsInner
        createdAt="12 January 2020"
        title="Selamat Pagi"
        description={description}
        category="TANTANGAN KODING"
        body={body}
      />
      <div className="bg-gray-200">
        <div className="container w-full max-w-6xl mx-auto px-2 py-8">
          <div className="flex flex-wrap -mx-2">
            <Card
              size="wide"
              backgroundImage="https://source.unsplash.com/DEa8_vxKlEo/400x200"
              title="Sate Padang Enak Sekali"
              description="Sate Padang memiliki aroma yang luar biasa sekali"
              howLongToRead={2}
              url="/news/something"
              category="Programming"
            />
            <Card
              size="wide"
              backgroundImage="https://source.unsplash.com/DEa8_vxKlEo/400x200"
              title="Sate Padang Enak Sekali"
              description="Sate Padang memiliki aroma yang luar biasa sekali"
              howLongToRead={2}
              url="/news/something"
              category="Programming"
            />
            <Card
              size="wide"
              backgroundImage="https://source.unsplash.com/DEa8_vxKlEo/400x200"
              title="Sate Padang Enak Sekali"
              description="Sate Padang memiliki aroma yang luar biasa sekali"
              howLongToRead={2}
              url="/news/something"
              category="Programming"
            />
          </div>
        </div>
      </div>
    </Web>
  );
}

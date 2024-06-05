export default function EmailTemplate({ content = 'Sehr Frau / Herr ' }: {
	content: string;
  }) {
	return <div>
	  <div dangerouslySetInnerHTML={{ __html: content }}></div>
	</div>
  };
import { Link } from 'react-router-dom';

function EmptyPage() {
  return (
    <div className="empty_page">
      <h2>잘못된 접근입니다.</h2>
      <Link to="/">돌아가기</Link>
    </div>
  );
}

export default EmptyPage;

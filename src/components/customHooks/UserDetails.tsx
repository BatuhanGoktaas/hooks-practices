import UseGithubProfile from "./UseGithubProfile";

type UserDetailProps = {
  username: string;
};

const UserDetails = ({ username }: UserDetailProps) => {
  const { user, error, isLoading }: any = UseGithubProfile(username);

  if (isLoading) {
    return <h1>Yükleniyor...</h1>;
  }

  if (error) {
    return <h1 style={{ color: "red" }}>{`Hata: ${error.message}`}</h1>;
  }

  return (
    <div>
      {user ? (
        <div>
          <h1>Kullanıcı Detayları:</h1>
          <p>{`Developer: ${user.name}`}</p>
          <img src={user.avatar_url} alt="avatar" />
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;

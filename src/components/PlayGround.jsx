
import CreatePlayGround from './CreatePlayGround'

function playGround() {
  return (
    <div className='h-screen'>
      <CreatePlayGround
        bgElement={
          <div className="absolute top-0 left-0 h-screen w-full z-10">
            <img
              className='h-full w-full object-cover'
              src="https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg"
              alt=""
            />
          </div>
        }
        video={
          <video
            className="absolute top-0 left-0 h-screen w-full z-0"
            autoPlay
            loop
          >
            <source
              src="https://ochi.design/wp-content/uploads/2022/05/Main-HQ-1.mp4"
              type="video/mp4"
            />
          </video>
        }
      />
    </div>
  );
}

export default playGround

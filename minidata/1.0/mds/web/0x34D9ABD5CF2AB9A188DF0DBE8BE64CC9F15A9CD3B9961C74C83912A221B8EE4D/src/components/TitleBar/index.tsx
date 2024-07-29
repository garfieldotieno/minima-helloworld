import useAndroidShowTitleBar from '../../hooks/useAndroidShowTitleBar';

const TitleBar = ({ showBack, back }) => {
  const openTitleBar = useAndroidShowTitleBar();

  // show back is only enabled on mobile

  return (
    <div className="sticky top-0 z-40 title-bar mr-2" onClick={openTitleBar}>
      <div className="grid grid-cols-12">
        <div className="col-span-6 flex items-center p-4 lg:px-8">
          {showBack && (
            <>
              <div className="flex lg:hidden items-center cursor-pointer" onClick={back}>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.40017 12.6693L0.230957 6.50009L6.40017 0.330872L7.29631 1.22701L2.02324 6.50009L7.29631 11.7732L6.40017 12.6693Z" fill="#F9F9FA"/>
                </svg>
                <div className="ml-3 text-lg">Back</div>
              </div>
              <div className="hidden lg:flex items-center cursor-pointer">
                <img src="./icon.png" className="w-8 h-8 rounded" alt="Logo" />
                <div className="ml-3 text-lg font-bold">Health</div>
              </div>
            </>
          )}
          {!showBack && (
            <>
              <img src="./icon.png" className="w-8 h-8 rounded" alt="Logo" />
              <div className="ml-3 text-lg font-bold">Health</div>
            </>
          )}
        </div>
        <div className="col-span-6 relative flex items-center justify-end p-4" />
      </div>
    </div>
  );
};

export default TitleBar;

import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <ProgressBar
    height="80"
    width="80"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{}}
    wrapperClass="progress-bar-wrapper"
    borderColor="black"
    barColor="#1a9fb1"
  />
);

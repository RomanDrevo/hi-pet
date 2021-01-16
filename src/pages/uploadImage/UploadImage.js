import React from 'react';
import {Upload} from 'antd';
import ImgCrop from 'antd-img-crop';
import {useDispatch, useSelector} from 'react-redux';
import {setUploadedImg} from '../../store/actions/petsActions';
import {getListOfUploadedImgs} from '../../store/selectors';

const UploadImage = () => {
  const dispatch = useDispatch();
  const fileList = useSelector((state) => getListOfUploadedImgs(state));
  
  const onChange = ({fileList: newFileList}) => {
    dispatch(setUploadedImg(newFileList));
  };
  
  const onPreview = async file => {
    let src = file.url;
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };
  return (
    <div>
      <ImgCrop rotate>
        <Upload
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
        >
          {fileList.length < 5 && '+ UploadImage'}
        </Upload>
      </ImgCrop>
    </div>
  );
};

export default UploadImage;


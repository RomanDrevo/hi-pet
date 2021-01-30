import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getListOfUploadedImgs} from '../../store/selectors';
import styles from './UploadImage.module.scss';
import {removeUploadedImg, setUploadedImg} from '../../store/actions/petsActions';
import ImgCrop from 'antd-img-crop';
import {Button, Upload} from 'antd';
import {UploadOutlined} from '@ant-design/icons';

const UploadImage = () => {
  const dispatch = useDispatch();
  const fileList = useSelector((state) => getListOfUploadedImgs(state));
  const props = {
    onRemove: file => {
      dispatch(removeUploadedImg(file));
    },
    beforeUpload: file => {
      const reader = new FileReader();
      reader.onload = function () {
        file.preview = reader.result;
        dispatch(setUploadedImg(file));
      };
      reader.readAsDataURL(file);
      return false;
    },
    fileList,
  };
  return (
    <div className={styles['upload-wrapper']}>
      <ImgCrop rotate>
        <Upload
          {...props}
        >
          <Button icon={<UploadOutlined/>}>Select File</Button>
        </Upload>
      </ImgCrop>
      {fileList.map((file, ind) => {
        return (
          <img key={ind} src={file.preview} alt={file.name}/>
        );
      })
      }
    </div>
  );
};

export default UploadImage;


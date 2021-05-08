import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FileUploadService } from '../services/file.service';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  @ViewChild("fileUpload", { static: false }) fileUpload!: ElementRef;

  step = 0;
  message: string | any;
  file!: File;
  url: string | any = "";
  files: any[] = [];
  vmodel!: string;
  vage!: string;

  constructor(private fileUploadService: FileUploadService, private _snackBar: MatSnackBar) { }


  ngOnInit(): void {
  }



  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  submit(): void {
    if (this.files != null) {
      const formData = new FormData();
      formData.append('uploadcsv', this.files[0], this.files[0].name);
      this.fileUploadService.upload(formData).subscribe(
        rsp => {
          if (rsp) {
            this._snackBar.open("File added into Queue", "OK", {
              duration: 5 * 1000,
            });
          }
        },
        error => {
          alert(error.error.data);
          this._snackBar.open("File added into Queue Failed", "OK", {
            duration: 5 * 1000,
          });
        });
    }

  }

  public onFileChanged(event: any) {
    this.prepareFilesList(event.target.files);
  }


  // //Gets called when the user selects an image
  // public onFileChanged(event: any) {
  //   //Select File
  //   if (event.target.files.length != 0) {
  //     this.file = event.target.files[0];
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.url = reader.result;
  //     };
  //     reader.readAsDataURL(this.file);
  //   }

  // }

  /**
 * Convert Files list to normal array list
 * @param files (Files List)
 */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.fileUpload.nativeElement.value = "";
    this.uploadFilesSimulator(0);
  }

  /**
 * Simulate the upload process
 */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
  * Delete file from files list
  * @param index (File index)
  */
  deleteFile(index: number) {
    if (this.files[index].progress < 100) {
      console.log("Upload in progress.");
      return;
    }
    this.files.splice(index, 1);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: number, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }
}
